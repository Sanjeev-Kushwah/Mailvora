'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { GoogleAuthButton } from '@/components/auth/GoogleAuthButton';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { isValidEmail } from '@/lib/validation';
import { ArrowRight, Loader2, UserPlus, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userNotFoundState, setUserNotFoundState] = useState(false);
  const [invalidCredentialsState, setInvalidCredentialsState] = useState(false);
  const [genericError, setGenericError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserNotFoundState(false);
    setInvalidCredentialsState(false);
    setGenericError('');

    const normalizedEmail = email.trim().toLowerCase();

    if (!isValidEmail(normalizedEmail)) {
      setGenericError('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setGenericError('Please enter your password.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await login({ email: normalizedEmail, password });
      if (!res.success) {
        if (res.code === 'USER_NOT_FOUND') {
          setUserNotFoundState(true);
        } else if (res.code === 'INVALID_CREDENTIALS') {
          setInvalidCredentialsState(true);
        } else {
          setGenericError(res.message || 'Login failed.');
        }
      }
    } catch (err: any) {
      setGenericError(err.message || 'An error occurred during authentication.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Welcome back
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Continue your career outreach with Mailvora.
          </p>
        </div>

        {/* Option A — Continue with Google */}
        <GoogleAuthButton label="Continue with Google" />

        {/* Divider */}
        <div className="relative flex items-center justify-center my-4">
          <div className="w-full border-t border-slate-200 dark:border-slate-800" />
          <span className="absolute px-3 bg-slate-50 dark:bg-[#080B12] text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            OR
          </span>
        </div>

        {/* Option B — Email + Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* USER_NOT_FOUND Guidance Card (#3) */}
          {userNotFoundState && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-3">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">No account found</div>
                  <p className="text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    We couldn't find a Mailvora account with this email. Create your Mailvora account first to continue.
                  </p>
                </div>
              </div>
              <Link href={`/signup?email=${encodeURIComponent(email.trim())}`}>
                <Button variant="primary" size="sm" className="w-full font-bold">
                  <UserPlus className="w-4 h-4" /> Create Account with {email.trim()}
                </Button>
              </Link>
            </div>
          )}

          {/* INVALID_CREDENTIALS Error State (#4) */}
          {invalidCredentialsState && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-400 space-y-1.5 font-semibold">
              <div>Incorrect email or password.</div>
              <div className="text-[11px] font-normal text-slate-600 dark:text-slate-300">
                Please check your credentials and try again, or use{' '}
                <Link href="/forgot-password" className="font-bold text-indigo-600 dark:text-indigo-400 underline">
                  Forgot password?
                </Link>
              </div>
            </div>
          )}

          {genericError && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold">
              {genericError}
            </div>
          )}

          <div className="space-y-1 text-xs">
            <label htmlFor="email" className="block font-bold text-slate-700 dark:text-slate-300">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sanjeev@example.com"
              className="w-full px-3.5 py-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <PasswordInput
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />

          <div className="flex justify-end pt-1">
            <Link
              href="/forgot-password"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full font-bold py-3 text-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Checking Database...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-1.5">
                Log in <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </Button>
        </form>

        {/* Footer Link */}
        <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-2">
          Don't have an account?{' '}
          <Link href="/signup" className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
            Create account
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
