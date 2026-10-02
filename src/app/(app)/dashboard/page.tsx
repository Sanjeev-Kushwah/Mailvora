'use client';

import React from 'react';
import Link from 'next/link';
import { MetricCard } from '@/components/ui/MetricCard';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Building2, 
  Users, 
  Send, 
  CheckCircle2, 
  MessageSquareText, 
  Plus, 
  Clock, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Inbox
} from 'lucide-react';
import { mockCampaigns } from '@/services/mockData';

export default function DashboardPage() {
  const activities = [
    { time: '10:14 AM', title: 'Recruiter replied', desc: 'Priya Sharma (Bajaj Allianz) requested introductory call', type: 'response' },
    { time: '09:52 AM', title: 'Email sent via Gmail', desc: 'Outreach to Amit Verma (Go Digit General Insurance)', type: 'sent' },
    { time: '09:51 AM', title: 'Email approved', desc: 'User approved outreach draft #41', type: 'approved' },
    { time: '09:48 AM', title: 'Email personalized', desc: 'Mailvora generated draft for Go Digit recruiter', type: 'personalized' },
    { time: '09:46 AM', title: 'Contact found', desc: 'Discovered Sneha Deshmukh (HDFC ERGO)', type: 'contact' },
    { time: '09:42 AM', title: 'Company discovered', desc: 'Matched ACKO General Insurance (InsurTech)', type: 'company' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner / Welcome Action */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-indigo-900 via-brand-950 to-slate-950 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="space-y-1 relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Active Workspace
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Your outreach is running.
          </h2>
          <p className="text-xs text-slate-300 max-w-lg">
            Mailvora has discovered 42 relevant companies and 67 recruiter contacts for your Pune target.
          </p>
        </div>
        <div className="flex items-center gap-3 relative z-10 w-full sm:w-auto">
          <Link href="/campaigns/new" className="w-full sm:w-auto">
            <Button size="sm" className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 font-bold">
              <Plus className="w-4 h-4" /> Create Campaign
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Metrics Grid (#43, #44) */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <MetricCard label="Companies" value={248} icon={Building2} color="indigo" change="+12 this wk" />
        <MetricCard label="Contacts" value={86} icon={Users} color="sky" change="+8 new" />
        <MetricCard label="Prepared" value={64} icon={Inbox} color="amber" />
        <MetricCard label="Sent" value={41} icon={Send} color="purple" change="+5 today" />
        <MetricCard label="Responses" value={7} icon={MessageSquareText} color="emerald" change="10.9% rate" />
      </div>

      {/* Main 2-Column Dashboard Area (#45) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: Active Campaigns */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Active Campaigns
            </h3>
            <Link href="/campaigns" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
              View All ({mockCampaigns.length})
            </Link>
          </div>

          <div className="space-y-3">
            {mockCampaigns.map((cmp) => (
              <Card key={cmp.id} className="p-5 space-y-4 hover:border-indigo-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{cmp.name}</h4>
                    <p className="text-xs text-slate-500">{cmp.industry} • {cmp.location}</p>
                  </div>
                  <Badge variant={cmp.status === 'Active' ? 'success' : 'default'}>
                    {cmp.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-medium">Companies</span>
                    <span className="font-extrabold text-slate-900 dark:text-white text-sm">{cmp.companiesCount}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-medium">Contacts</span>
                    <span className="font-extrabold text-slate-900 dark:text-white text-sm">{cmp.contactsCount}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-medium">Sent</span>
                    <span className="font-extrabold text-indigo-600 dark:text-indigo-400 text-sm">{cmp.sentCount}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-medium">Responses</span>
                    <span className="font-extrabold text-emerald-500 text-sm">{cmp.responseCount}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
                  <span className="text-slate-400">Created {cmp.createdAt}</span>
                  <Link href="/queue">
                    <Button variant="ghost" size="sm" className="text-indigo-600 dark:text-indigo-400">
                      Manage Outreach <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Live Activity Timeline (#46) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Live Activity Feed
            </h3>
            <span className="text-xs font-mono text-emerald-500 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Stream
            </span>
          </div>

          <Card className="p-5 space-y-3">
            {activities.map((act, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 pb-3 border-b last:border-0 border-slate-200 dark:border-slate-800 text-xs"
              >
                <div className="font-mono text-[11px] text-slate-400 shrink-0 pt-0.5">
                  {act.time}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                    <span>{act.title}</span>
                    {act.type === 'response' && (
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold">
                        Reply
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                    {act.desc}
                  </p>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
