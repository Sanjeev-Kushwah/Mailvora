'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/context/ToastContext';
import { Edit3, RefreshCw, Send, Sparkles, Paperclip, CheckCircle2 } from 'lucide-react';

export default function ComposerPage() {
  const [recipient, setRecipient] = useState('priya.sharma@bajajallianz.co.in');
  const [subject, setSubject] = useState('Application & Introduction — Customer Support Opportunity (Sanjeev Kushwah)');
  const [body, setBody] = useState(`Hi Priya,\n\nI noticed Bajaj Allianz's recent expansion of the customer service team in Vimannagar. With 2.5 years of experience resolving complex customer claims and maintaining 96%+ satisfaction scores in high-volume environments, I am eager to contribute to your operations in Pune.\n\nMy background includes hands-on expertise in CRM tools (Zendesk & Salesforce), policy query resolution, and escalation management. Attached is my resume for your reference.\n\nWould you be open to a 10-minute introductory conversation this week?\n\nBest regards,\nSanjeev Kushwah`);
  const [isGenerating, setIsGenerating] = useState(false);

  const { toast } = useToast();

  const handleRegenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      toast('success', 'Email Regenerated', 'Applied updated tone and resume match filters.');
    }, 1000);
  };

  const handleApprove = () => {
    toast('success', 'Email Approved & Queued', 'Ready for Gmail OAuth dispatch.');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Email Composer & Personalization Studio
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Edit, polish, or regenerate candidate outreach emails with real-time resume matching.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={handleRegenerate} disabled={isGenerating}>
          <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
          Regenerate Text
        </Button>
      </div>

      <Card className="p-6 space-y-4 shadow-xl border-indigo-500/30">
        <div className="space-y-3 text-xs">
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Recipient Email</label>
            <input
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 font-mono font-semibold text-slate-900 dark:text-white outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Subject Line</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Email Body</label>
            <textarea
              rows={10}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 leading-relaxed font-sans outline-none resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
              <Paperclip className="w-4 h-4 text-indigo-500" /> Attached: Sanjeev_Kushwah_Resume.pdf (2.4 MB)
            </span>
            <Button variant="primary" size="md" onClick={handleApprove} className="font-bold">
              <CheckCircle2 className="w-4 h-4" /> Approve & Queue Email
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
