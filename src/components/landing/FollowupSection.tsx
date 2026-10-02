'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Calendar, ShieldAlert, MessageSquareText, Clock, ArrowRight } from 'lucide-react';

export function FollowupSection() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-[#10141D]/50 border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Step 05 — Follow-ups & Recruiter Replies
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Automate gentle follow-up reminders while keeping your contact history duplicate-free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Follow-up Assistant */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              <Calendar className="w-4 h-4" /> Suggested Follow-up
            </div>
            <div className="space-y-2 text-xs">
              <div className="font-bold text-slate-900 dark:text-white text-sm">
                Sneha Deshmukh (HDFC ERGO)
              </div>
              <p className="text-slate-500">Initial email sent Sep 30 • No response yet</p>
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#161B26] font-mono text-[11px] text-slate-700 dark:text-slate-300">
                Suggested Date: Oct 04 (4 days interval)
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="primary" size="sm" className="flex-1">
                Schedule
              </Button>
              <Button variant="outline" size="sm">
                Skip
              </Button>
            </div>
          </Card>

          {/* Card 2: Duplicate Protection */}
          <Card className="p-6 space-y-4 border-amber-500/30">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" /> Duplicate Safeguard
            </div>
            <div className="space-y-2 text-xs">
              <div className="font-bold text-slate-900 dark:text-white text-sm">
                Rohan Kulkarni (ACKO)
              </div>
              <p className="text-slate-500">You contacted this recruiter 8 days ago.</p>
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[11px] font-medium">
                Mailvora automatically prevents duplicate outreach to protect your domain reputation.
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              View Outreach History
            </Button>
          </Card>

          {/* Card 3: Live Recruiter Response */}
          <Card className="p-6 space-y-4 border-emerald-500/30 bg-emerald-500/5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquareText className="w-4 h-4" /> Recruiter Response
              </span>
              <Badge variant="emerald">1 New</Badge>
            </div>
            <div className="space-y-2 text-xs">
              <div className="font-bold text-slate-900 dark:text-white text-sm">
                Priya Sharma (Bajaj Allianz)
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 italic text-slate-700 dark:text-slate-300">
                "Hi Sanjeev, Let’s schedule a quick 10-minute call this Thursday to discuss open roles in Vimannagar."
              </div>
            </div>
            <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              Response Rate: 10.9% (Above Industry Average)
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
