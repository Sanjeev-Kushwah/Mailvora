'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Users, ShieldCheck, ExternalLink, CheckCircle2, Clock } from 'lucide-react';
import { mockContacts } from '@/services/mockData';

export function ContactSection() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-[#10141D]/50 border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Step 03 — Recruiter Contact Intelligence
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Identify exact talent acquisition leads, HR managers, and recruiters with complete source provenance and verification status.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mockContacts.slice(0, 3).map((contact) => (
            <Card key={contact.id} className="p-5 space-y-4 hover:border-indigo-500/40 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-800"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{contact.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{contact.companyName}</p>
                  </div>
                </div>
                <Badge variant={contact.status === 'Replied' ? 'success' : 'purple'}>
                  {contact.status}
                </Badge>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Role</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">
                    {contact.role}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Email</span>
                  <span className="font-mono text-indigo-600 dark:text-indigo-400">
                    {contact.email}
                  </span>
                </div>
              </div>

              {/* Source Provenance */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-medium">
                  <ExternalLink className="w-3 h-3 text-slate-400" /> Source: {contact.source}
                </span>
                <span className="flex items-center gap-1 text-emerald-500 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
