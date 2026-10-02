export type AuthProviderType = 'email' | 'google';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  emailVerified: boolean;
  roleTitle?: string;
  authProvider: AuthProviderType;
  createdAt: string;
  lastLoginAt?: string;
}

export interface AuthIdentity {
  id: string;
  userId: string;
  provider: AuthProviderType;
  providerUserId: string;
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password?: string;
}

export interface SignupCredentials {
  name: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  agreeToTerms: boolean;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

export interface PasswordCriteria {
  minLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
}
