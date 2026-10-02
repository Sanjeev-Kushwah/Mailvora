'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Drawer } from '@/components/ui/Drawer';
import { Button } from '@/components/ui/Button';
import { Mail, CheckCircle2, Clock, MessageSquareText, ExternalLink, Paperclip } from 'lucide-react';
import { mockEmails } from '@/services/mockData';
import { Email } from '@/types';

export default function SentPage() {
  const sentEmails = mockEmails.filter((e) => e.status === 'Sent');
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Sent Outreach History
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            41 Emails dispatched via Gmail OAuth • 7 Recruiter replies received.
          </p>
        </div>
      </div>

      <Card className="overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100/50 dark:bg-[#10141D]">
                <th className="py-3.5 px-4">Company & Recipient</th>
                <th className="py-3.5 px-4">Subject</th>
                <th className="py-3.5 px-4">Sent Time</th>
                <th className="py-3.5 px-4">Status / Response</th>
                <th className="py-3.5 px-4 text-right">Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs font-medium">
              {sentEmails.map((email) => (
                <tr
                  key={email.id}
                  onClick={() => setSelectedEmail(email)}
                  className="hover:bg-slate-50 dark:hover:bg-[#161B26] transition-colors cursor-pointer"
                >
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-900 dark:text-white">{email.companyName}</div>
                    <div className="text-[11px] text-slate-400">{email.recipientName} ({email.recipientRole})</div>
                  </td>
                  <td className="py-4 px-4 text-slate-700 dark:text-slate-300 max-w-xs truncate">
                    {email.subject}
                  </td>
                  <td className="py-4 px-4 text-slate-500 font-mono text-[11px]">
                    {email.sentAt}
                  </td>
                  <td className="py-4 px-4">
                    {email.responseSnippet ? (
                      <Badge variant="emerald" className="font-bold">
                        Replied
                      </Badge>
                    ) : (
                      <Badge variant="info">Delivered</Badge>
                    )}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                      View Email
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Email Detail Drawer (#53) */}
      {selectedEmail && (
        <Drawer
          isOpen={!!selectedEmail}
          onClose={() => setSelectedEmail(null)}
          title={`Email to ${selectedEmail.recipientName}`}
          subtitle={`${selectedEmail.companyName} • Sent ${selectedEmail.sentAt}`}
        >
          <div className="space-y-5 text-xs">
            <div className="space-y-2 p-3.5 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-slate-400 block font-medium">Recipient</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {selectedEmail.recipientName} ({selectedEmail.recipientEmail})
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium mt-2">Subject</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {selectedEmail.subject}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-slate-400 block font-medium">Email Body Content</span>
              <div className="p-4 rounded-xl bg-white dark:bg-[#10141D] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                {selectedEmail.body}
              </div>
            </div>

            {selectedEmail.responseSnippet && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 space-y-2">
                <div className="font-bold text-sm flex items-center gap-1.5">
                  <MessageSquareText className="w-4 h-4" /> Recruiter Reply ({selectedEmail.responseReceivedAt})
                </div>
                <div className="italic text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-[#10141D]/80 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                  "{selectedEmail.responseSnippet}"
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <Paperclip className="w-3.5 h-3.5 text-indigo-500" /> {selectedEmail.attachmentName}
              </span>
              <span className="font-semibold text-indigo-500">Personalization: {selectedEmail.personalizationScore}%</span>
            </div>
          </div>
        </Drawer>
      )}
    </div>
  );
}
