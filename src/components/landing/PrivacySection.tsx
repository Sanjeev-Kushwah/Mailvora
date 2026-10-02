'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { ShieldCheck, Lock, Eye, ShieldAlert, Download, Trash2, CheckCircle2 } from 'lucide-react';

export function PrivacySection() {
  const guarantees = [
    { title: 'Gmail OAuth 2.0', desc: 'Secure Google authorization. Mailvora never sees or stores your password.', icon: Lock },
    { title: '100% Manual Approval', desc: 'Every email requires your review before queueing. Zero surprise automated sends.', icon: ShieldCheck },
    { title: 'Contact Provenance', desc: 'Complete transparency on where contact emails were discovered.', icon: Eye },
    { title: 'Duplicate Safeguards', desc: 'Automatic prevention against contacting the same recruiter twice.', icon: ShieldAlert },
    { title: 'Data Export & Deletion', desc: 'Export your entire outreach history or delete your account anytime.', icon: Download },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#080B12] border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
            Privacy & Trust Promises
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Your job search. Your control.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            We built Mailvora around user consent, transparency, and data protection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {guarantees.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="p-5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
