'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/context/ToastContext';
import { ThemeSelector } from '@/components/common/ThemeSelector';
import { User, Mail, ShieldCheck, Bell, Lock, Sliders, FileText } from 'lucide-react';
import { mockUser } from '@/services/mockData';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'Outreach' | 'Profile' | 'Privacy' | 'Appearance'>('Outreach');
  const [manualApproval, setManualApproval] = useState(true);
  const [preventDuplicates, setPreventDuplicates] = useState(true);
  const [stopOptOuts, setStopOptOuts] = useState(true);
  const [dailyLimit, setDailyLimit] = useState(50);
  const [emailDelay, setEmailDelay] = useState(3);

  const { toast } = useToast();

  const handleSave = () => {
    toast('success', 'Settings Saved', 'Your outreach controls and preferences have been updated.');
  };

  const tabs = [
    { id: 'Outreach', label: 'Outreach Controls', icon: Sliders },
    { id: 'Profile', label: 'Candidate Profile', icon: User },
    { id: 'Privacy', label: 'Privacy & Security', icon: ShieldCheck },
    { id: 'Appearance', label: 'Appearance & Theme', icon: Lock },
  ] as const;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Workspace Settings
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Configure safety safeguards, Gmail sending parameters, and candidate profile info.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Settings Nav */}
        <div className="md:col-span-4 space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white dark:bg-[#10141D] text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#161B26]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Settings Content */}
        <div className="md:col-span-8">
          {activeTab === 'Outreach' && (
            <Card className="p-6 space-y-6 shadow-xl">
              <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
                Outreach Safeguards & Approval Controls
              </h3>

              <div className="space-y-4 text-xs">
                {/* Manual approval required */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      Manual approval required (Default ON)
                    </div>
                    <div className="text-slate-500 text-[11px]">
                      Require 1-click review before queuing any email for dispatch.
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={manualApproval}
                    onChange={(e) => setManualApproval(e.target.checked)}
                    className="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
                  />
                </div>

                {/* Prevent duplicate outreach */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      Prevent duplicate outreach
                    </div>
                    <div className="text-slate-500 text-[11px]">
                      Warn and suppress outreach if a recruiter was contacted within 14 days.
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={preventDuplicates}
                    onChange={(e) => setPreventDuplicates(e.target.checked)}
                    className="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
                  />
                </div>

                {/* Stop contacting opted-out contacts */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      Respect opt-outs automatically
                    </div>
                    <div className="text-slate-500 text-[11px]">
                      Immediately block future emails if recruiter requests no further contact.
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={stopOptOuts}
                    onChange={(e) => setStopOptOuts(e.target.checked)}
                    className="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Daily Sending Limit
                    </label>
                    <input
                      type="number"
                      value={dailyLimit}
                      onChange={(e) => setDailyLimit(Number(e.target.value))}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Delay Between Emails (mins)
                    </label>
                    <input
                      type="number"
                      value={emailDelay}
                      onChange={(e) => setEmailDelay(Number(e.target.value))}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <Button variant="primary" size="sm" onClick={handleSave}>
                  Save Settings
                </Button>
              </div>
            </Card>
          )}

          {activeTab === 'Profile' && (
            <Card className="p-6 space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
                Candidate Profile Information
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                  <input
                    defaultValue={mockUser.name}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 font-semibold text-slate-900 dark:text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <input
                    defaultValue={mockUser.email}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 font-semibold text-slate-900 dark:text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Role Title</label>
                  <input
                    defaultValue={mockUser.roleTitle}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 font-semibold text-slate-900 dark:text-white outline-none"
                  />
                </div>
              </div>
              <Button variant="primary" size="sm" onClick={handleSave}>
                Save Profile
              </Button>
            </Card>
          )}

          {activeTab === 'Appearance' && (
            <Card className="p-6 space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
                Interface Theme Preference
              </h3>
              <div className="space-y-3 text-xs">
                <p className="text-slate-500">Choose your preferred Mailvora workspace theme.</p>
                <ThemeSelector />
              </div>
            </Card>
          )}

          {activeTab === 'Privacy' && (
            <Card className="p-6 space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
                Privacy Controls & Data Export
              </h3>
              <div className="space-y-3 text-xs">
                <Button variant="outline" size="sm">
                  Export Outreach Data (CSV)
                </Button>
                <p className="text-rose-500 hover:underline cursor-pointer pt-2 font-semibold">
                  Delete Account & Erase All Outreach History
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
