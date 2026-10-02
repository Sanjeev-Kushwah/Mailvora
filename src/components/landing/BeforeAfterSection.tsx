'use client';

import React from 'react';
import { XCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

export function BeforeAfterSection() {
  const withoutItems = [
    '20+ open browser tabs & lost links',
    'Messy Excel / Notion tracking spreadsheets',
    'Hours spent guessing recruiter emails',
    'Generic copy-pasted outreach messages',
    'Lost contacts and forgotten follow-up dates',
    'Zero response analytics or optimization'
  ];

  const withItems = [
    'Unified intelligent career workspace',
    'Automated target company discovery',
    'Verified recruiter contact intelligence',
    'Context-aware personalized email drafts',
    'Seamless Gmail OAuth direct sending',
    'Automatic follow-up scheduling & response tracking'
  ];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-[#10141D]/50 border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Transform your job hunt experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            See the difference when you automate repetitive research and focus purely on recruiter replies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Without Mailvora */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Without Mailvora
              </h3>
            </div>
            <div className="space-y-3.5">
              {withoutItems.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With Mailvora */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#161B26] border border-indigo-500/40 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                With Mailvora
              </h3>
            </div>
            <div className="space-y-3.5">
              {withItems.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-medium text-slate-900 dark:text-slate-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
