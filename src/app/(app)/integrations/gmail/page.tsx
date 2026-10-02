'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/context/ToastContext';
import { ShieldCheck, CheckCircle2, Lock, MailCheck, ExternalLink, RefreshCw } from 'lucide-react';
import { mockGmailConnection } from '@/services/mockData';

export default function GmailIntegrationPage() {
  const [connection, setConnection] = useState(mockGmailConnection);
  const { toast } = useToast();

  const handleToggle = () => {
    const newState = !connection.isConnected;
    setConnection({
      ...connection,
      isConnected: newState,
      oauthActive: newState
    });
    toast(
      newState ? 'success' : 'info',
      newState ? 'Gmail Connected' : 'Gmail Disconnected',
      newState ? 'OAuth authorization active.' : 'Outreach sending paused.'
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Gmail Integration & Connection Settings
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Manage your Google OAuth connection for direct email dispatch.
        </p>
      </div>

      <Card className="p-6 space-y-6 shadow-xl border-indigo-500/30">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 font-extrabold flex items-center justify-center text-xl">
              M
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Google OAuth 2.0 Integration</h3>
              <p className="text-xs text-slate-500">Account: {connection.email}</p>
            </div>
          </div>

          <Button
            variant={connection.isConnected ? 'outline' : 'primary'}
            size="sm"
            onClick={handleToggle}
            className={connection.isConnected ? 'text-rose-500 hover:text-rose-600' : ''}
          >
            {connection.isConnected ? 'Disconnect Gmail' : 'Connect Gmail Account'}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-slate-400 block font-medium">OAuth Status</span>
            <span className={`font-bold text-sm ${connection.oauthActive ? 'text-emerald-500' : 'text-slate-400'}`}>
              {connection.oauthActive ? 'Active & Authenticated' : 'Disconnected'}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-slate-400 block font-medium">Daily Quota</span>
            <span className="font-bold text-indigo-600 dark:text-indigo-400 text-sm">
              {connection.sentToday} / {connection.dailyLimit} Emails Sent Today
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-slate-400 block font-medium">Connected Since</span>
            <span className="font-mono text-slate-700 dark:text-slate-300 text-xs font-semibold">
              {connection.connectedAt}
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-600 dark:text-indigo-400 space-y-2">
          <div className="font-bold flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-indigo-500" /> Security & Privacy Safeguards
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Mailvora uses Google's official restricted `https://www.googleapis.com/auth/gmail.send` OAuth scope. Your password is never shared, requested, or stored.
          </p>
        </div>
      </Card>
    </div>
  );
}
