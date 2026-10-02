'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FileSpreadsheet, Plus, Copy, Sparkles } from 'lucide-react';
import { mockTemplates } from '@/services/mockData';
import { useToast } from '@/context/ToastContext';

export default function TemplatesPage() {
  const { toast } = useToast();

  const handleCopy = (name: string) => {
    toast('success', 'Template Copied', `${name} copied to clipboard.`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Email Outreach Templates
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Pre-built high-converting formulas with dynamic variable placeholders.
          </p>
        </div>
        <Button variant="primary" size="sm" className="font-semibold">
          <Plus className="w-4 h-4" /> Create Template
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockTemplates.map((tmpl) => (
          <Card key={tmpl.id} className="p-6 space-y-4 shadow-sm border-indigo-500/20 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{tmpl.name}</h3>
                <Badge variant="purple">{tmpl.category}</Badge>
              </div>

              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Subject: {tmpl.subject}
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-sans leading-relaxed">
                {tmpl.body}
              </div>

              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Supported Variables
                </span>
                <div className="flex flex-wrap gap-1">
                  {tmpl.variables.map((v) => (
                    <span key={v} className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-[10px] font-bold">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-2">
              <Button variant="outline" size="sm" onClick={() => handleCopy(tmpl.name)}>
                <Copy className="w-3.5 h-3.5" /> Copy Template
              </Button>
              <Button variant="primary" size="sm">
                Use in Composer
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
