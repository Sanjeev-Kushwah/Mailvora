'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, Clock, Send, ShieldCheck, Mail } from 'lucide-react';
import { mockEmails } from '@/services/mockData';

export function ApprovalSection() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-[#10141D]/50 border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Step 04 — Review & Outreach Queue
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Never send blind bulk emails. Review every candidate outreach message before it enters your dispatch queue.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-between px-2 text-xs font-semibold text-slate-500">
            <span>Outreach Queue Overview</span>
            <div className="flex gap-4">
              <span>12 Awaiting Review</span>
              <span>8 Approved</span>
              <span>5 Scheduled</span>
              <span className="text-emerald-500">21 Sent</span>
            </div>
          </div>

          <div className="space-y-3">
            {mockEmails.map((email) => (
              <Card key={email.id} className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{email.companyName}</h4>
                      <Badge variant={email.status === 'Sent' ? 'success' : 'purple'}>
                        {email.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      To: <span className="font-semibold text-slate-700 dark:text-slate-300">{email.recipientName}</span> ({email.recipientRole})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200 dark:border-slate-800">
                  <span className="text-xs text-slate-400 font-mono hidden md:inline">
                    {email.sentAt || email.scheduledFor || 'Draft Ready'}
                  </span>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="primary" size="sm">
                    Approve & Queue
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
