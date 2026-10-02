'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { DuplicateContactModal } from '@/components/common/DuplicateContactModal';
import { Users, ShieldCheck, ExternalLink, Mail, Search, Clock } from 'lucide-react';
import { mockContacts } from '@/services/mockData';
import { Contact } from '@/types';

export default function ContactsPage() {
  const [duplicateModalContact, setDuplicateModalContact] = useState<Contact | null>(null);

  const handleOutreachClick = (contact: Contact) => {
    if (contact.status === 'Replied' || contact.status === 'Contacted') {
      setDuplicateModalContact(contact);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Recruiter Contacts Directory
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            67 Talent acquisition leads and recruiters matched for Insurance — Pune.
          </p>
        </div>
      </div>

      <Card className="overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100/50 dark:bg-[#10141D]">
                <th className="py-3.5 px-4">Contact</th>
                <th className="py-3.5 px-4">Company & Role</th>
                <th className="py-3.5 px-4">Email</th>
                <th className="py-3.5 px-4">Source Provenance</th>
                <th className="py-3.5 px-4">Verification</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs font-medium">
              {mockContacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-slate-50 dark:hover:bg-[#161B26] transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={contact.avatar}
                        alt={contact.name}
                        className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-slate-800"
                      />
                      <span className="font-bold text-slate-900 dark:text-white">{contact.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-300">
                    <div className="font-semibold text-slate-900 dark:text-white">{contact.companyName}</div>
                    <div className="text-[11px] text-slate-400">{contact.role}</div>
                  </td>
                  <td className="py-4 px-4 font-mono text-indigo-600 dark:text-indigo-400">
                    {contact.email}
                  </td>
                  <td className="py-4 px-4 text-slate-500 text-[11px]">
                    <span className="flex items-center gap-1">
                      <ExternalLink className="w-3 h-3 text-slate-400" /> {contact.source}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 text-emerald-500 font-semibold text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5" /> {contact.verificationStatus}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant={contact.status === 'Replied' ? 'success' : 'purple'}>
                      {contact.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOutreachClick(contact)}
                    >
                      Outreach
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Duplicate Contact Safeguard Modal (#39) */}
      {duplicateModalContact && (
        <DuplicateContactModal
          isOpen={!!duplicateModalContact}
          onClose={() => setDuplicateModalContact(null)}
          contactName={duplicateModalContact.name}
          companyName={duplicateModalContact.companyName}
          lastContactedDaysAgo={8}
          onViewHistory={() => {
            setDuplicateModalContact(null);
          }}
        />
      )}
    </div>
  );
}
