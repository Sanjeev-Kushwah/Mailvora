'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Send, Plus, Search, Filter, ArrowRight, Building2, Users } from 'lucide-react';
import { mockCampaigns } from '@/services/mockData';

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Outreach Campaigns
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Manage your active and completed company outreach campaigns.
          </p>
        </div>
        <Link href="/campaigns/new">
          <Button variant="primary" size="sm" className="font-semibold">
            <Plus className="w-4 h-4" /> Create Campaign
          </Button>
        </Link>
      </div>

      {/* Campaigns Table */}
      <Card className="overflow-hidden shadow-sm">
        <div className="p-4 bg-slate-50 dark:bg-[#161B26] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <Filter className="w-3.5 h-3.5 text-indigo-500" />
            <span>Filter by: Industry, Status</span>
          </div>
          <span className="text-xs text-slate-400 font-mono">{mockCampaigns.length} Total Campaigns</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100/50 dark:bg-[#10141D]">
                <th className="py-3.5 px-4">Campaign</th>
                <th className="py-3.5 px-4">Industry & Role</th>
                <th className="py-3.5 px-4 text-center">Companies</th>
                <th className="py-3.5 px-4 text-center">Contacts</th>
                <th className="py-3.5 px-4 text-center">Sent</th>
                <th className="py-3.5 px-4 text-center">Replies</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs font-medium">
              {mockCampaigns.map((cmp) => (
                <tr key={cmp.id} className="hover:bg-slate-50 dark:hover:bg-[#161B26] transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900 dark:text-white">
                    {cmp.name}
                  </td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-300">
                    <div>{cmp.role}</div>
                    <div className="text-[11px] text-slate-400">{cmp.industry} • {cmp.location}</div>
                  </td>
                  <td className="py-4 px-4 text-center font-bold">{cmp.companiesCount}</td>
                  <td className="py-4 px-4 text-center font-bold">{cmp.contactsCount}</td>
                  <td className="py-4 px-4 text-center font-bold text-indigo-600 dark:text-indigo-400">{cmp.sentCount}</td>
                  <td className="py-4 px-4 text-center font-bold text-emerald-500">{cmp.responseCount}</td>
                  <td className="py-4 px-4">
                    <Badge variant={cmp.status === 'Active' ? 'success' : 'default'}>
                      {cmp.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Link href="/queue">
                      <Button variant="ghost" size="sm" className="text-indigo-600 dark:text-indigo-400">
                        Open <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
