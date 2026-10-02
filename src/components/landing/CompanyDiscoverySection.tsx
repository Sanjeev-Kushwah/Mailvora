'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Building2, MapPin, Users, Globe, ExternalLink } from 'lucide-react';
import { mockCompanies } from '@/services/mockData';

export function CompanyDiscoverySection() {
  return (
    <section className="py-20 bg-white dark:bg-[#080B12] border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Step 02 — Company Discovery & Intelligence
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Mailvora scans regional employer indices to find relevant companies hiring for your specific role.
          </p>
        </div>

        {/* Discovery Table Container */}
        <Card className="max-w-5xl mx-auto overflow-hidden shadow-xl">
          <div className="p-4 sm:p-5 bg-slate-50 dark:bg-[#161B26] border-b border-slate-200 dark:border-[#242B38] flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-indigo-500" />
                Target Campaign: Insurance — Pune
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                42 Companies discovered • 67 Recruiter contacts matched
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold border border-emerald-500/20">
              Live Discovery Active
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-[#10141D] text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Company</th>
                  <th className="py-3 px-4">Industry</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4 text-center">Contacts</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs font-medium">
                {mockCompanies.slice(0, 4).map((comp) => (
                  <tr
                    key={comp.id}
                    className="hover:bg-slate-50 dark:hover:bg-[#161B26] transition-colors"
                  >
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={comp.logo}
                          alt={comp.name}
                          className="w-8 h-8 rounded-lg object-cover border border-slate-200 dark:border-slate-800"
                        />
                        <div>
                          <div className="font-bold text-slate-900 dark:text-slate-100">{comp.name}</div>
                          <div className="text-[11px] text-slate-400">{comp.size}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">
                      {comp.industry}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" /> {comp.location}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center font-bold text-indigo-600 dark:text-indigo-400">
                      {comp.contactCount}
                    </td>
                    <td className="py-3.5 px-4">
                      <Badge variant="purple">{comp.status}</Badge>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
}
