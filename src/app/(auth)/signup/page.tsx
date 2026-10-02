'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { GoogleAuthButton } from '@/components/auth/GoogleAuthButton';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { PasswordStrength } from '@/components/auth/PasswordStrength';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { isValidEmail, isPasswordValid } from '@/lib/validation';
import { ArrowRight, Loader2 } from 'lucide-react';

function SignupForm() {
  const searchParams = useSearchParams();
  const initialEmail = searchParams?.get('email') || '';

  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!isPasswordValid(password)) {
      setError('Password does not meet the security criteria below.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!agreeTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy.');
      return;
    }

    setIsSubmitting(true);
    try {
      await register({
        name,
        email: email.trim().toLowerCase(),
        password,
        confirmPassword,
        agreeToTerms: agreeTerms
      });
    } catch (err: any) {
      setError(err.message || 'Unable to create account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Create your Mailvora account
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Start building smarter career outreach today.
        </p>
      </div>

      {/* Google OAuth Button */}
      <GoogleAuthButton label="Continue with Google" />

      {/* Divider */}
      <div className="relative flex items-center justify-center my-4">
        <div className="w-full border-t border-slate-200 dark:border-slate-800" />
        <span className="absolute px-3 bg-slate-50 dark:bg-[#080B12] text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          OR
        </span>
      </div>

      {/* Email + Password Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold">
            {error}
          </div>
        )}

        <div className="space-y-1 text-xs">
          <label htmlFor="name" className="block font-bold text-slate-700 dark:text-slate-300">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Sanjeev Kushwah"
            className="w-full px-3.5 py-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        <div className="space-y-1 text-xs">
          <label htmlFor="email" className="block font-bold text-slate-700 dark:text-slate-300">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="sanjeev@example.com"
            className="w-full px-3.5 py-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        <PasswordInput
          id="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />

        <PasswordStrength password={password} />

        <PasswordInput
          id="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
        />

        <div className="flex items-start gap-2 pt-1 text-xs text-slate-600 dark:text-slate-400">
          <input
            id="terms"
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="w-4 h-4 mt-0.5 accent-indigo-600 rounded cursor-pointer"
          />
          <label htmlFor="terms" className="leading-snug cursor-pointer select-none">
            I agree to the{' '}
            <a href="#" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
              Privacy Policy
            </a>.
          </label>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full font-bold py-3 text-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" /> Creating account...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-1.5">
              Create account <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </Button>
      </form>

      {/* Footer Link */}
      <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-2">
        Already have an account?{' '}
        <Link href="/login" className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
          Log in
        </Link>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <AuthLayout>
      <Suspense fallback={
        <div className="text-center py-8 text-xs text-slate-400">Loading signup form...</div>
      }>
        <SignupForm />
      </Suspense>
    </AuthLayout>
  );
}
