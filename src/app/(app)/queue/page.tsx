'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useToast } from '@/context/ToastContext';
import { Inbox, CheckCircle2, Clock, Send, Mail, Edit3, Paperclip } from 'lucide-react';
import { mockEmails } from '@/services/mockData';
import { QueueStatus } from '@/types';

export default function QueuePage() {
  const [emails, setEmails] = useState(mockEmails);
  const [activeTab, setActiveTab] = useState<'All' | QueueStatus>('All');
  const { toast } = useToast();

  const handleApprove = (id: string) => {
    setEmails((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: 'Approved' as QueueStatus } : e))
    );
    toast('success', 'Email Approved & Queued', 'Ready for Gmail OAuth dispatch.');
  };

  const handleSendNow = (id: string) => {
    setEmails((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: 'Sent' as QueueStatus, sentAt: 'Just now' } : e))
    );
    toast('success', 'Email Sent via Gmail', 'Delivered to recruiter inbox.');
  };

  const filteredEmails = activeTab === 'All' 
    ? emails 
    : emails.filter((e) => e.status === activeTab);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Outreach Review & Queue
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Review, edit, or approve candidate emails before dispatching through Gmail.
          </p>
        </div>
        <Link href="/composer">
          <Button variant="primary" size="sm" className="font-semibold">
            <Edit3 className="w-4 h-4" /> Compose Custom Email
          </Button>
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 overflow-x-auto text-xs font-semibold select-none">
        {(['All', 'Draft', 'Approved', 'Queued', 'Sent'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === tab
                ? 'bg-indigo-600 text-white shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Queue Items */}
      <div className="space-y-4">
        {filteredEmails.map((email) => (
          <Card key={email.id} className="p-5 space-y-4 shadow-sm border-indigo-500/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{email.companyName}</h3>
                    <Badge variant={email.status === 'Sent' ? 'success' : 'purple'}>
                      {email.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    To: <span className="font-semibold text-slate-800 dark:text-slate-200">{email.recipientName}</span> ({email.recipientEmail})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                {email.status !== 'Sent' && (
                  <>
                    <Button variant="outline" size="sm" onClick={() => handleApprove(email.id)}>
                      Approve & Queue
                    </Button>
                    <Button variant="primary" size="sm" onClick={() => handleSendNow(email.id)}>
                      <Send className="w-3.5 h-3.5" /> Send Now
                    </Button>
                  </>
                )}
                {email.status === 'Sent' && (
                  <span className="text-xs font-semibold text-emerald-500 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Sent {email.sentAt}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="font-semibold text-slate-900 dark:text-white">
                Subject: {email.subject}
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 italic leading-relaxed line-clamp-3">
                "{email.body}"
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Paperclip className="w-3.5 h-3.5 text-indigo-500" /> Attached: {email.attachmentName} ({email.attachmentSize})
              </span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Personalization Match: {email.personalizationScore}%
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
