'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { TrendingUp, Mail, MessageSquare, BarChart2 } from 'lucide-react';

export function AnalyticsPreviewSection() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-[#10141D]/50 border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Outreach Performance Analytics
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Track metrics that matter — response rates, delivery status, and campaign performance over time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <Card className="p-5 text-center">
            <Mail className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
            <div className="text-2xl font-black text-slate-900 dark:text-white">64</div>
            <div className="text-xs text-slate-500">Emails Prepared</div>
          </Card>
          <Card className="p-5 text-center">
            <MessageSquare className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
            <div className="text-2xl font-black text-slate-900 dark:text-white">7</div>
            <div className="text-xs text-slate-500">Recruiter Replies</div>
          </Card>
          <Card className="p-5 text-center">
            <TrendingUp className="w-6 h-6 text-electric-400 mx-auto mb-2" />
            <div className="text-2xl font-black text-slate-900 dark:text-white">10.9%</div>
            <div className="text-xs text-slate-500">Response Rate</div>
          </Card>
        </div>
      </div>
    </section>
  );
}
