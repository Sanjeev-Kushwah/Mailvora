'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { User, Settings, Layers, LogOut, ChevronDown, HelpCircle, Laptop } from 'lucide-react';

export function UserMenu() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  if (!user) return null;

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161B26] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
      >
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-7 h-7 rounded-lg object-cover border border-slate-200 dark:border-slate-800"
          />
        ) : (
          <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
            {user.name.charAt(0)}
          </div>
        )}
        <span className="text-xs font-bold text-slate-900 dark:text-white hidden sm:inline">
          {user.name.split(' ')[0]}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-slate-200 dark:border-[#242B38] bg-white dark:bg-[#10141D] shadow-2xl p-2 z-50 text-slate-900 dark:text-slate-100 space-y-1 text-xs">
          <div className="px-3 py-2 border-b border-slate-200 dark:border-slate-800">
            <div className="font-bold text-slate-900 dark:text-white">{user.name}</div>
            <div className="text-[11px] text-slate-400 truncate">{user.email}</div>
          </div>

          <Link
            href="/settings"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-[#161B26] transition-colors"
          >
            <User className="w-4 h-4 text-slate-400" /> My Profile
          </Link>

          <Link
            href="/settings"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-[#161B26] transition-colors"
          >
            <Settings className="w-4 h-4 text-slate-400" /> Account Settings
          </Link>

          <Link
            href="/integrations/gmail"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-[#161B26] transition-colors"
          >
            <Layers className="w-4 h-4 text-slate-400" /> Integrations
          </Link>

          <div className="pt-1 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 font-bold transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>{isLoggingOut ? 'Signing you out...' : 'Log out'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
