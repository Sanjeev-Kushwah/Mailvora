'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { ShieldAlert, Clock, Mail } from 'lucide-react';

interface DuplicateContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactName: string;
  companyName: string;
  lastContactedDaysAgo: number;
  onViewHistory: () => void;
}

export function DuplicateContactModal({
  isOpen,
  onClose,
  contactName,
  companyName,
  lastContactedDaysAgo,
  onViewHistory
}: DuplicateContactModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="sm">
      <div className="text-center py-2">
        <div className="mx-auto w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
          <ShieldAlert className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Already Contacted
        </h3>
        
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
          You previously reached out to <strong className="text-slate-900 dark:text-slate-100">{contactName}</strong> at{' '}
          <strong className="text-slate-900 dark:text-slate-100">{companyName}</strong> {lastContactedDaysAgo} days ago.
        </p>

        <div className="my-5 p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-left text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Mailvora safeguard active — duplicate suppressed.</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Avoid spamming recruiters to maintain high response rates.</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Button variant="outline" onClick={onClose} size="sm">
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onClose();
              onViewHistory();
            }}
            size="sm"
          >
            View Outreach History
          </Button>
        </div>
      </div>
    </Modal>
  );
}
