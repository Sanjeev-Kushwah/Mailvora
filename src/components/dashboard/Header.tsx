'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeSelector } from '@/components/common/ThemeSelector';
import { UserMenu } from '@/components/auth/UserMenu';
import { Button } from '@/components/ui/Button';
import { Bell, Search, Plus, Sparkles, X, CheckCircle2, Home } from 'lucide-react';
import { mockNotifications } from '@/services/mockData';
import { useAuth } from '@/context/AuthContext';

export function Header() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const unreadCount = mockNotifications.filter((n) => !n.read).length;
  const { user } = useAuth();

  const userName = user ? user.name.split(' ')[0] : 'Sanjeev';

  return (
    <header className="sticky top-0 z-20 bg-white/90 dark:bg-[#10141D]/90 backdrop-blur-md border-b border-slate-200 dark:border-[#242B38] px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
      {/* Left Greeting & Status */}
      <div>
        <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          Good morning, {userName}
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-semibold hidden sm:inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Outreach Active
          </span>
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
          Your outreach is moving • 7 recruiter replies this week
        </p>
      </div>

      {/* Right Controls & Quick Actions */}
      <div className="flex items-center gap-3">
        {/* Return to Home Page Button */}
        <Link href="/">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
            title="Go to Landing / Home Page"
          >
            <Home className="w-4 h-4 text-indigo-500" />
            <span className="hidden sm:inline">Home</span>
          </Button>
        </Link>

        {/* Command Palette Trigger */}
        <button
          onClick={() => {
            const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true });
            window.dispatchEvent(event);
          }}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#161B26] text-xs font-medium text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
        >
          <Search className="w-3.5 h-3.5 text-indigo-500" />
          <span>Search...</span>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-300">
            ⌘K
          </kbd>
        </button>

        <ThemeSelector />

        {/* User Account Menu Dropdown */}
        <UserMenu />

        {/* Notification Center Trigger */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161B26] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 relative transition-colors"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-[#10141D]" />
            )}
          </button>

          {/* Notifications Dropdown */}
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl border border-slate-200 dark:border-[#242B38] bg-white dark:bg-[#10141D] shadow-2xl p-4 z-50 text-slate-900 dark:text-slate-100">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Notification Center
                </span>
                <button onClick={() => setNotificationsOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-3 space-y-2 max-h-80 overflow-y-auto">
                {mockNotifications.map((n) => (
                  <Link
                    key={n.id}
                    href={n.link || '/dashboard'}
                    onClick={() => setNotificationsOpen(false)}
                    className={`block p-3 rounded-xl border transition-colors text-xs ${
                      n.read
                        ? 'bg-slate-50/50 dark:bg-[#161B26]/50 border-slate-200 dark:border-slate-800'
                        : 'bg-indigo-500/5 border-indigo-500/20'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold">
                      <span className="text-slate-900 dark:text-white">{n.title}</span>
                      <span className="text-[10px] text-slate-400">{n.timestamp}</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {n.message}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Primary New Campaign Action */}
        <Link href="/campaigns/new">
          <Button size="sm" className="font-semibold">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New Campaign</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}
