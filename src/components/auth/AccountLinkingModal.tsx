'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Link2 } from 'lucide-react';

interface AccountLinkingModalProps {
  isOpen: boolean;
  email: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function AccountLinkingModal({
  isOpen,
  email,
  onConfirm,
  onCancel
}: AccountLinkingModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onCancel} maxWidth="sm">
      <div className="text-center py-2 space-y-4">
        <div className="mx-auto w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
          <Link2 className="w-6 h-6" />
        </div>

        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Account Linking Requested
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">
            An account already exists with <strong className="text-slate-900 dark:text-slate-100">{email}</strong>.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-left flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <span>
            Connecting your Google account allows you to sign in with either your password or Google in the future.
          </span>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Button variant="outline" size="sm" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" onClick={onConfirm} className="font-bold">
            Connect Google Account
          </Button>
        </div>
      </div>
    </Modal>
  );
}
