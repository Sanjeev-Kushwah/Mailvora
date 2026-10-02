'use client';

import React from 'react';
import { Logo } from '@/components/common/Logo';
import { Sparkles, Building2, Users, Mail, Send, CheckCircle2 } from 'lucide-react';

export function AuthProductPreview() {
  return (
    <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-indigo-950 via-brand-950 to-slate-950 text-white relative overflow-hidden select-none">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Brand Logo */}
      <div className="relative z-10">
        <Logo size="lg" />
      </div>

      {/* Middle Value Proposition */}
      <div className="space-y-6 relative z-10 my-auto py-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          Intelligent Job Outreach
        </div>

        <h2 className="text-3xl xl:text-4xl font-black tracking-tight leading-tight">
          Reach the right companies.{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-200 to-electric-400">
            Without the repetitive work.
          </span>
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed max-w-md">
          Mailvora turns your resume and career goals into targeted company discovery, personalized recruiter outreach and organized follow-ups.
        </p>

        {/* Live Product Card Mockup (#29) */}
        <div className="p-5 rounded-2xl bg-white/10 dark:bg-[#10141D]/80 border border-white/15 backdrop-blur-md shadow-2xl space-y-4 max-w-md">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="text-xs font-bold text-white">Campaign Overview</div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
              Active
            </span>
          </div>

          <div className="text-xs font-semibold text-indigo-300">
            Customer Support • Pune
          </div>

          <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-slate-400 block text-[9px]">Companies</span>
              <span className="font-bold text-white">42</span>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-slate-400 block text-[9px]">Contacts</span>
              <span className="font-bold text-white">67</span>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-slate-400 block text-[9px]">Sent</span>
              <span className="font-bold text-indigo-300">41</span>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-slate-400 block text-[9px]">Replies</span>
              <span className="font-bold text-emerald-400">7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Assurances */}
      <div className="relative z-10 text-xs text-slate-400 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Mailvora Inc.</span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> You stay in 100% control
        </span>
      </div>
    </div>
  );
}
