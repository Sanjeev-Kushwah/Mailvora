'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Modal } from '@/components/ui/Modal';
import { Loader2, Plus, UserCheck, ShieldCheck } from 'lucide-react';

interface GoogleAuthButtonProps {
  label?: string;
}

export function GoogleAuthButton({ label = 'Continue with Google' }: GoogleAuthButtonProps) {
  const { loginWithGoogleAccount } = useAuth();
  const [isPending, setIsPending] = useState(false);
  const [showAccountChooser, setShowAccountChooser] = useState(false);
  const [customEmail, setCustomEmail] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  // Pre-configured Google accounts for the Account Chooser (prompt=select_account simulation)
  const availableAccounts = [
    {
      name: 'Sanjeev Kushwah',
      email: 'sanjeev@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      googleUserId: 'google_uid_1092837469283746',
      badge: 'Existing Mailvora User'
    },
    {
      name: 'Sanjeev Kushwah (Work)',
      email: 'sanjeev@example.com',
      avatar: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=120&q=80',
      googleUserId: 'google_uid_998877665544',
      badge: 'Email Account (Linking Test)'
    },
    {
      name: 'New Candidate',
      email: 'newuser@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      googleUserId: 'google_uid_new_88776655',
      badge: 'New Account (Onboarding Test)'
    }
  ];

  const handleInitialClick = () => {
    // Check if live Google OAuth Client ID is present
    const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (googleClientId) {
      // Official Google OAuth 2.0 URL with prompt=select_account
      const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);
      const scope = encodeURIComponent('openid profile email');
      const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&response_type=code&scope=${scope}&redirect_uri=${redirectUri}&prompt=select_account`;
      window.location.href = googleAuthUrl;
      return;
    }

    // In local dev/demo mode: Open explicit Google Account Chooser modal (prompt=select_account)
    setShowAccountChooser(true);
  };

  const handleSelectAccount = async (account: {
    name: string;
    email: string;
    avatar?: string;
    googleUserId: string;
  }) => {
    setShowAccountChooser(false);
    setIsPending(true);
    try {
      await loginWithGoogleAccount(account);
    } finally {
      setIsPending(false);
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customEmail || !customEmail.includes('@')) return;
    const name = customEmail.split('@')[0].replace('.', ' ');
    handleSelectAccount({
      name,
      email: customEmail,
      googleUserId: `google_uid_custom_${Date.now()}`
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={handleInitialClick}
        disabled={isPending}
        aria-label={label}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-slate-200 dark:border-[#242B38] bg-white dark:bg-[#161B26] text-slate-800 dark:text-slate-100 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-150 shadow-xs disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.99] select-none"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 text-indigo-500 animate-spin" />
            <span>Connecting to Google...</span>
          </>
        ) : (
          <>
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>{label}</span>
          </>
        )}
      </button>

      {/* Explicit Google Account Chooser Modal (prompt=select_account) */}
      <Modal isOpen={showAccountChooser} onClose={() => setShowAccountChooser(false)} maxWidth="sm">
        <div className="py-2 space-y-5">
          {/* Header Bar */}
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span className="text-base font-bold text-slate-900 dark:text-white">Sign in with Google</span>
            </div>
            <p className="text-xs text-slate-500">Choose an account to continue to <strong>Mailvora</strong></p>
            <div className="text-[10px] font-mono text-indigo-500 font-semibold pt-0.5">
              prompt=select_account active
            </div>
          </div>

          {/* Account List */}
          <div className="space-y-2">
            {availableAccounts.map((acc) => (
              <button
                key={acc.email}
                onClick={() => handleSelectAccount(acc)}
                className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-[#161B26] transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={acc.avatar}
                    alt={acc.name}
                    className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-800"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {acc.name}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">{acc.email}</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold">
                  {acc.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Custom Input Toggle */}
          {!showCustomInput ? (
            <button
              onClick={() => setShowCustomInput(true)}
              className="w-full flex items-center gap-3 p-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-[#161B26] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                <Plus className="w-4 h-4" />
              </div>
              <span>Use another Google account...</span>
            </button>
          ) : (
            <form onSubmit={handleCustomSubmit} className="space-y-2 pt-1">
              <input
                type="email"
                required
                value={customEmail}
                onChange={(e) => setCustomEmail(e.target.value)}
                placeholder="Enter any @gmail.com address"
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-mono outline-none"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors"
              >
                Authenticate Selected Account
              </button>
            </form>
          )}

          <div className="text-[11px] text-slate-400 text-center pt-2 border-t border-slate-200 dark:border-slate-800">
            To continue, Google will share your name, email address, and profile picture with Mailvora.
          </div>
        </div>
      </Modal>
    </>
  );
}
