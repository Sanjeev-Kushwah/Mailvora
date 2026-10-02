'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Sparkles, ArrowRight, Building2, Users, Send, CheckCircle2, Clock } from 'lucide-react';

export function LiveDashboardSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#080B12] border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
            Unified Workspace Preview
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything organized in one live dashboard.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Monitor active campaigns, candidate queue status, live recruiter activity, and outreach analytics in real time.
          </p>
        </div>

        {/* Live Dashboard Mockup Screen */}
        <Card className="max-w-5xl mx-auto overflow-hidden shadow-2xl border-indigo-500/30">
          <div className="p-4 sm:p-6 bg-slate-50 dark:bg-[#161B26] border-b border-slate-200 dark:border-[#242B38] flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Good morning, Sanjeev
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Your outreach is moving smoothly • 7 new responses this week
              </p>
            </div>
            <Link href="/dashboard">
              <Button size="sm">
                Open Full Application
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Active Campaign Card */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Active Outreach Campaign
              </span>
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#10141D] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Insurance — Pune</h4>
                  <Badge variant="emerald">Active</Badge>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-white dark:bg-[#161B26]">
                    <span className="text-slate-400 text-[10px] block">Companies</span>
                    <span className="font-bold text-slate-900 dark:text-white">42</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-[#161B26]">
                    <span className="text-slate-400 text-[10px] block">Contacts</span>
                    <span className="font-bold text-slate-900 dark:text-white">67</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-[#161B26]">
                    <span className="text-slate-400 text-[10px] block">Sent</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">41</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-[#161B26]">
                    <span className="text-slate-400 text-[10px] block">Responses</span>
                    <span className="font-bold text-emerald-500">7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Activity Timeline */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Live Activity Timeline
              </span>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#10141D] border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="flex items-center gap-2 font-medium">
                    <Clock className="w-3.5 h-3.5 text-indigo-500" /> 10:14 AM — Recruiter Replied (Bajaj Allianz)
                  </span>
                  <span className="text-[10px] text-emerald-500 font-bold">New</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#10141D] border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <Send className="w-3.5 h-3.5 text-slate-400" /> 09:52 AM — Email Sent via Gmail (Go Digit)
                  </span>
                  <span className="text-[10px] text-slate-400">Sent</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#10141D] border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" /> 09:51 AM — Email Approved by User
                  </span>
                  <span className="text-[10px] text-slate-400">Approved</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
