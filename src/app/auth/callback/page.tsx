'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Loader2, Sparkles } from 'lucide-react';

export default function AuthCallbackPage() {
  const router = useRouter();
  const { refreshUser } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      await refreshUser();
      router.push('/dashboard');
    };
    handleCallback();
  }, [refreshUser, router]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080B12] flex flex-col items-center justify-center space-y-4 text-center p-4">
      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
      <div className="space-y-1">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-500" /> Completing Authentication...
        </h2>
        <p className="text-xs text-slate-500">Securing your session and redirecting to Mailvora workspace.</p>
      </div>
    </div>
  );
}
