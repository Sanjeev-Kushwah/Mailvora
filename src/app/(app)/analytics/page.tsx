'use client';

import React from 'react';
import { MetricCard } from '@/components/ui/MetricCard';
import { Card } from '@/components/ui/Card';
import { Mail, MessageSquareText, TrendingUp, Send, CheckCircle2 } from 'lucide-react';

export default function AnalyticsPage() {
  const weeklyData = [
    { day: 'Mon', sent: 8, replies: 1 },
    { day: 'Tue', sent: 12, replies: 2 },
    { day: 'Wed', sent: 9, replies: 1 },
    { day: 'Thu', sent: 7, replies: 2 },
    { day: 'Fri', sent: 5, replies: 1 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Outreach Performance Analytics
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Detailed response metrics and campaign efficiency breakdown.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricCard label="Total Emails Sent" value={41} icon={Send} color="indigo" change="+5 today" />
        <MetricCard label="Recruiter Replies" value={7} icon={MessageSquareText} color="emerald" change="+2 this week" />
        <MetricCard label="Response Rate" value={10.9} suffix="%" icon={TrendingUp} color="sky" change="Above avg" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Email & Response Visualizer */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Weekly Dispatch & Recruiter Reply Trends
            </h3>
            <span className="text-xs text-slate-400">Past 7 Days</span>
          </div>

          <div className="space-y-3 pt-2">
            {weeklyData.map((d) => (
              <div key={d.day} className="space-y-1 text-xs">
                <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300">
                  <span>{d.day}</span>
                  <span>{d.sent} Sent • <span className="text-emerald-500 font-bold">{d.replies} Replies</span></span>
                </div>
                <div className="flex h-3 rounded-full bg-slate-100 dark:bg-[#161B26] overflow-hidden">
                  <div
                    className="bg-indigo-600 rounded-l-full"
                    style={{ width: `${(d.sent / 15) * 100}%` }}
                  />
                  <div
                    className="bg-emerald-500 rounded-r-full"
                    style={{ width: `${(d.replies / 15) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Campaign Breakdown */}
        <Card className="p-6 space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Campaign Response Comparison
            </h3>
          </div>

          <div className="space-y-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                <span>Insurance — Pune</span>
                <span className="text-emerald-500">17.0% Response Rate</span>
              </div>
              <p className="text-slate-500 text-[11px]">41 Sent • 7 Replies</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                <span>Financial Services — Mumbai</span>
                <span className="text-indigo-500">16.6% Response Rate</span>
              </div>
              <p className="text-slate-500 text-[11px]">24 Sent • 4 Replies</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
