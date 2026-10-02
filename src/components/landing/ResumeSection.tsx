'use client';

import React from 'react';
import { Upload, FileCheck, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function ResumeSection() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-[#10141D]/50 border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Step 01 — Resume Intelligence
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Mailvora parses your resume with precision, identifying your top accomplishments, domain expertise, and core tool stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          {/* Resume Upload Visual */}
          <Card className="p-6 border-dashed border-2 border-indigo-500/30 text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto">
              <Upload className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Drop your resume here
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Supports PDF or DOCX up to 10 MB
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-xs font-mono font-semibold flex items-center justify-between text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-500" /> Sanjeev_Kushwah_Resume.pdf
              </span>
              <span className="text-indigo-500">2.4 MB</span>
            </div>
          </Card>

          {/* Extracted Information Output */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Extracted Profile Insights
              </span>
              <span className="text-[11px] font-semibold text-emerald-500 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Parsed
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Primary Domain & Role</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                  Customer Support / Claims Analyst (2.5 Years Experience)
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Target Industry</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  Insurance & Financial Services
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium mb-1.5">Identified Skills & Tools</span>
                <div className="flex flex-wrap gap-1.5">
                  {['CRM Operations', 'Zendesk', 'Salesforce Service Cloud', 'Claims Processing', 'Customer Escalations'].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
