'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useToast } from '@/context/ToastContext';
import { Clock, Calendar, CheckCircle2, Send, Edit3, X } from 'lucide-react';
import { mockFollowUps } from '@/services/mockData';

export default function FollowupsPage() {
  const [followups, setFollowups] = useState(mockFollowUps);
  const { toast } = useToast();

  const handleSchedule = (id: string) => {
    setFollowups((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: 'Scheduled' } : f))
    );
    toast('success', 'Follow-up Scheduled', 'Remind scheduled for 4 days after original sent date.');
  };

  const handleSkip = (id: string) => {
    setFollowups((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: 'Skipped' } : f))
    );
    toast('info', 'Follow-up Skipped', 'Removed from follow-up queue.');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Follow-up Reminders & Management
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Automated polite follow-up suggestions for non-responding recruiters.
        </p>
      </div>

      <div className="space-y-4">
        {followups.map((flw) => (
          <Card key={flw.id} className="p-5 space-y-4 shadow-sm border-indigo-500/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{flw.recipientName}</h3>
                    <Badge variant={flw.status === 'Scheduled' ? 'purple' : 'warning'}>
                      {flw.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {flw.companyName} • Original email sent: {flw.originalSentDate}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                {flw.status === 'Pending' && (
                  <>
                    <Button variant="outline" size="sm" onClick={() => handleSkip(flw.id)}>
                      Skip
                    </Button>
                    <Button variant="primary" size="sm" onClick={() => handleSchedule(flw.id)}>
                      Schedule Follow-up
                    </Button>
                  </>
                )}
                {flw.status === 'Scheduled' && (
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> Scheduled for {flw.suggestedDate}
                  </span>
                )}
              </div>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-400 italic bg-slate-50 dark:bg-[#161B26] p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              "{flw.previewText}"
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
