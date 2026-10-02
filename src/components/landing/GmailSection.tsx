'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, CheckCircle2, Lock, ExternalLink, RefreshCw } from 'lucide-react';

export function GmailSection() {
  return (
    <section className="py-20 bg-white dark:bg-[#080B12] border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Official Google OAuth 2.0 Integration
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Direct delivery from your authentic Gmail address.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Mailvora dispatches your approved emails directly through your own Gmail account. Emails appear in your Sent folder and replies arrive directly in your inbox.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-indigo-500" /> Never asks for your Gmail password
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Disconnect anytime with 1 click
              </span>
            </div>
          </div>

          <Card className="p-6 space-y-5 shadow-xl border-indigo-500/30">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-rose-500 font-bold flex items-center justify-center text-base">
                  M
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Gmail Integration</h4>
                  <p className="text-xs text-slate-500">Connected: sanjeev@example.com</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Connected
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#161B26]">
                <span className="text-slate-500">OAuth Status</span>
                <span className="font-semibold text-slate-900 dark:text-white">Active & Authenticated</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#161B26]">
                <span className="text-slate-500">Daily Sending Quota</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">18 / 50 Emails Sent Today</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs">
              <Button variant="outline" size="sm" className="text-rose-500 hover:text-rose-600">
                Disconnect Gmail
              </Button>
              <span className="text-[11px] text-slate-400">Google Security Scopes Active</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
