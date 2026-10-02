'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { Mail, CheckCircle2, RefreshCw, ArrowRight } from 'lucide-react';

function VerifyEmailForm() {
  const searchParams = useSearchParams();
  const email = searchParams?.get('email') || 'sanjeev@example.com';
  const token = searchParams?.get('token') || 'demo-token';

  const { verifyEmail, resendVerification } = useAuth();
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleResend = async () => {
    setIsResending(true);
    await resendVerification(email);
    setTimeout(() => setIsResending(false), 1000);
  };

  const handleVerifySimulate = async () => {
    setIsVerifying(true);
    try {
      await verifyEmail(token);
    } catch {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-6 text-center">
      <div className="w-16 h-16 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto">
        <Mail className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Check your email
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
          We've sent a verification link to:
        </p>
        <div className="font-mono text-sm font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-[#161B26] p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 max-w-xs mx-auto">
          {email}
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <Button
          variant="primary"
          className="w-full font-bold py-3 text-sm"
          onClick={handleVerifySimulate}
          disabled={isVerifying}
        >
          {isVerifying ? (
            'Verifying Email...'
          ) : (
            <span className="flex items-center justify-center gap-1.5">
              Simulate Email Verification Link <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </Button>

        <Button
          variant="outline"
          className="w-full"
          onClick={handleResend}
          disabled={isResending}
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isResending ? 'animate-spin' : ''}`} />
          {isResending ? 'Sending email...' : 'Resend verification email'}
        </Button>
      </div>

      <div className="text-xs text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-800">
        Didn't receive it? Check your spam folder or contact support.
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <AuthLayout>
      <Suspense fallback={
        <div className="text-center py-8 text-xs text-slate-400">Loading verification details...</div>
      }>
        <VerifyEmailForm />
      </Suspense>
    </AuthLayout>
  );
}
