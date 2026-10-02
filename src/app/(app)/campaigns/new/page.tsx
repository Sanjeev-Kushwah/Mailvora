'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/context/ToastContext';
import { Sparkles, ArrowRight, Building2, Users, CheckCircle2, Search } from 'lucide-react';

export default function CreateCampaignPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('Insurance — Pune Cohort 2');
  const [industry, setIndustry] = useState('Insurance');
  const [role, setRole] = useState('Customer Support / Operations Analyst');
  const [location, setLocation] = useState('Pune');
  const [workMode, setWorkMode] = useState('On-site');
  const [isDiscovering, setIsDiscovering] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  const handleStartDiscovery = () => {
    setIsDiscovering(true);
    setTimeout(() => {
      setIsDiscovering(false);
      setStep(2);
      toast('success', 'Discovery Complete', 'Discovered 42 companies and 67 recruiter contacts.');
    }, 1400);
  };

  const handleFinalLaunch = () => {
    toast('success', 'Campaign Created', 'Your new outreach campaign is active!');
    router.push('/dashboard');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> New Outreach Campaign Wizard
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Create Outreach Campaign
        </h1>
        <p className="text-xs text-slate-500">
          Define target hiring criteria and discover matching recruiter leads.
        </p>
      </div>

      {/* Progress Tabs */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
        <span className={step === 1 ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}>
          1. Target Setup
        </span>
        <span>→</span>
        <span className={step === 2 ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}>
          2. Discovery Results
        </span>
        <span>→</span>
        <span className={step === 3 ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}>
          3. Launch
        </span>
      </div>

      {step === 1 && (
        <Card className="p-6 space-y-4 shadow-xl">
          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Campaign Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 outline-none font-semibold text-slate-900 dark:text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Target Industry</label>
                <input
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 outline-none font-semibold text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Target Role</label>
                <input
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 outline-none font-semibold text-slate-900 dark:text-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Location</label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 outline-none font-semibold text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Work Mode</label>
                <select
                  value={workMode}
                  onChange={(e) => setWorkMode(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 outline-none font-semibold text-slate-900 dark:text-white"
                >
                  <option value="On-site">On-site</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            className="w-full"
            onClick={handleStartDiscovery}
            disabled={isDiscovering}
          >
            {isDiscovering ? 'Discovering Recruiter Leads...' : 'Run Discovery & Fetch Companies'}
          </Button>
        </Card>
      )}

      {step === 2 && (
        <Card className="p-6 space-y-6 shadow-xl">
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-600 dark:text-emerald-400 space-y-1">
            <div className="flex items-center gap-2 text-sm font-bold">
              <CheckCircle2 className="w-5 h-5" /> Discovery Complete
            </div>
            <p>42 companies discovered • 67 recruiting contacts found • 18 relevant openings matched</p>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 flex items-center justify-between font-bold">
              <span>Bajaj Allianz General Insurance</span>
              <span className="text-indigo-500">Priya Sharma (TA Lead)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 flex items-center justify-between font-bold">
              <span>Go Digit General Insurance</span>
              <span className="text-indigo-500">Amit Verma (Recruiter)</span>
            </div>
          </div>

          <Button variant="primary" className="w-full font-bold" onClick={handleFinalLaunch}>
            Activate Campaign & Queue Outreach <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Card>
      )}
    </div>
  );
}
