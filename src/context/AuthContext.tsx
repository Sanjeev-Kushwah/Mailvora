'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthUser, LoginCredentials, SignupCredentials, ForgotPasswordPayload, ResetPasswordPayload } from '@/types/auth';
import { authService, AuthResponse } from '@/services/auth.service';
import { AccountLinkingModal } from '@/components/auth/AccountLinkingModal';
import { useToast } from '@/context/ToastContext';

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<AuthResponse>;
  register: (credentials: SignupCredentials) => Promise<{ requiresVerification: boolean }>;
  loginWithGoogleAccount: (googleAccount: {
    email: string;
    name: string;
    avatarUrl?: string;
    googleUserId: string;
  }) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  forgotPassword: (payload: ForgotPasswordPayload) => Promise<string>;
  resetPassword: (payload: ResetPasswordPayload) => Promise<void>;
  verifyEmail: (token: string) => Promise<void>;
  resendVerification: (email: string) => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [linkingPending, setLinkingPending] = useState<{
    email: string;
    userId: string;
    googleUserId: string;
  } | null>(null);

  const router = useRouter();
  const { toast } = useToast();

  const refreshUser = async () => {
    try {
      const current = await authService.getCurrentUser();
      setUser(current);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    setLoading(true);
    try {
      const res = await authService.login(credentials);
      if (res.success && res.user) {
        setUser(res.user);
        toast('success', `Welcome back, ${res.user.name.split(' ')[0]}!`, 'Logged into Mailvora.');
        router.push('/dashboard');
      }
      return res;
    } catch (err: any) {
      toast('error', 'Login Error', err.message || 'Please check your credentials.');
      return { success: false, code: 'INVALID_CREDENTIALS', message: err.message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (credentials: SignupCredentials) => {
    setLoading(true);
    try {
      const res = await authService.register(credentials);
      if (!res.success) {
        toast('error', 'Registration Failed', res.message || 'Email already registered.');
        throw new Error(res.message);
      }
      if (res.user) {
        setUser(res.user);
        toast('success', 'Account Created Successfully', 'Please verify your email address to continue.');
        if (res.requiresVerification) {
          router.push(`/verify-email?email=${encodeURIComponent(res.user.email)}`);
        } else {
          router.push('/onboarding');
        }
      }
      return { requiresVerification: !!res.requiresVerification };
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogleAccount = async (googleAccount: {
    email: string;
    name: string;
    avatarUrl?: string;
    googleUserId: string;
  }): Promise<AuthResponse> => {
    setLoading(true);
    try {
      const res = await authService.loginWithGoogleAccount(googleAccount);

      if (res.code === 'ACCOUNT_LINKING_REQUIRED' && res.data) {
        // Trigger account linking confirmation modal
        setLinkingPending({
          email: res.existingAccountEmail || googleAccount.email,
          userId: res.data.userId,
          googleUserId: res.data.googleUserId
        });
        return res;
      }

      if (res.success && res.user) {
        setUser(res.user);
        toast('success', `Welcome back, ${res.user.name.split(' ')[0]}!`, 'Authenticated via Google OAuth.');
        if (res.newUser) {
          router.push('/onboarding');
        } else {
          router.push('/dashboard');
        }
      }
      return res;
    } catch (err: any) {
      toast('error', 'Google Sign-in Error', err.message || 'Unable to complete Google sign-in.');
      return { success: false, code: 'GOOGLE_AUTH_FAILED', message: err.message };
    } finally {
      setLoading(false);
    }
  };

  const confirmAccountLinking = async () => {
    if (!linkingPending) return;
    setLoading(true);
    try {
      const updatedUser = await authService.linkGoogleAccount(
        linkingPending.userId,
        linkingPending.googleUserId,
        linkingPending.email
      );
      setUser(updatedUser);
      toast('success', 'Google Account Linked!', `Connected ${linkingPending.email} to Mailvora.`);
      setLinkingPending(null);
      router.push('/dashboard');
    } catch (err: any) {
      toast('error', 'Account Linking Failed', err.message);
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = async (payload: ForgotPasswordPayload) => {
    const res = await authService.forgotPassword(payload);
    toast('info', 'Reset Instructions Sent', res.message);
    return res.message;
  };

  const resetPassword = async (payload: ResetPasswordPayload) => {
    setLoading(true);
    try {
      await authService.resetPassword(payload);
      toast('success', 'Password Updated', 'Your password has been reset. Please log in with your new password.');
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const verifyEmail = async (token: string) => {
    setLoading(true);
    try {
      const verifiedUser = await authService.verifyEmail(token);
      setUser(verifiedUser);
      toast('success', 'Email Verified!', 'Your Mailvora account is active.');
      router.push('/onboarding');
    } finally {
      setLoading(false);
    }
  };

  const resendVerification = async (email: string) => {
    await authService.resendVerification(email);
    toast('info', 'Verification Link Resent', `Sent a new link to ${email}.`);
  };

  const logout = async () => {
    setLoading(true);
    try {
      await authService.logout();
      setUser(null);
      toast('info', 'Logged Out', 'You have been signed out of Mailvora.');
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        register,
        loginWithGoogleAccount,
        logout,
        forgotPassword,
        resetPassword,
        verifyEmail,
        resendVerification,
        refreshUser
      }}
    >
      {children}

      {/* Account Linking Confirmation Modal (#13) */}
      {linkingPending && (
        <AccountLinkingModal
          isOpen={!!linkingPending}
          email={linkingPending.email}
          onConfirm={confirmAccountLinking}
          onCancel={() => setLinkingPending(null)}
        />
      )}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
