'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/context/ToastContext';
import { 
  Upload, 
  FileCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Building2, 
  Users, 
  Search, 
  ShieldCheck 
} from 'lucide-react';
import { Logo } from '@/components/common/Logo';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [targetIndustry, setTargetIndustry] = useState('Insurance');
  const [targetRole, setTargetRole] = useState('Customer Support / Claims Analyst');
  const [targetLocation, setTargetLocation] = useState('Pune');
  const [workMode, setWorkMode] = useState('On-site');
  const [isDiscovering, setIsDiscovering] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  const handleUploadSimulate = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setFileUploaded(true);
      toast('success', 'Resume Uploaded & Analyzed', 'Extracted 2.5 years Customer Support & Zendesk expertise.');
    }, 1200);
  };

  const handleRunDiscovery = () => {
    setIsDiscovering(true);
    setTimeout(() => {
      setIsDiscovering(false);
      toast('success', 'Campaign Created & Companies Discovered', '42 companies and 67 recruiter contacts ready for review!');
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080B12] text-slate-900 dark:text-slate-100 flex flex-col justify-between p-4 sm:p-6 lg:p-8">
      {/* Top Header */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
        <Logo size="md" />
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <span>Step 0{step} of 03</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto w-full my-4">
        <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-indigo-600 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Wizard Card */}
      <div className="max-w-2xl mx-auto w-full my-auto py-6">
        {step === 1 && (
          <Card className="p-8 space-y-6 shadow-2xl">
            <div className="space-y-2 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Step 1 • Resume Parsing
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Upload your resume
              </h2>
              <p className="text-xs text-slate-500">
                Mailvora extracts your experience, skills, and accomplishments automatically.
              </p>
            </div>

            {!fileUploaded ? (
              <div
                onClick={handleUploadSimulate}
                className="p-8 rounded-2xl border-2 border-dashed border-indigo-500/40 hover:border-indigo-500 bg-indigo-500/5 cursor-pointer text-center space-y-3 transition-colors"
              >
                <Upload className={`w-10 h-10 text-indigo-500 mx-auto ${isAnalyzing ? 'animate-bounce' : ''}`} />
                {isAnalyzing ? (
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    Analyzing resume fields & CRM skills...
                  </div>
                ) : (
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      Click to upload Sanjeev_Kushwah_Resume.pdf
                    </div>
                    <div className="text-xs text-slate-400 mt-1">PDF or DOCX up to 10 MB</div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4" /> Sanjeev_Kushwah_Resume.pdf (2.4 MB)
                  </span>
                  <span>100% Parsed</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                  <div className="font-bold text-slate-900 dark:text-white">Extracted Insights:</div>
                  <div className="text-slate-600 dark:text-slate-300">
                    • 2.5 Years Experience in Customer Support & Claims Resolution
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    • Tools: Zendesk, Salesforce Service Cloud, Policy Admin
                  </div>
                </div>
              </div>
            )}

            <Button
              variant="primary"
              className="w-full"
              disabled={!fileUploaded}
              onClick={() => setStep(2)}
            >
              Continue to Career Target <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Card>
        )}

        {step === 2 && (
          <Card className="p-8 space-y-6 shadow-2xl">
            <div className="space-y-2 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
                Step 2 • Career Target
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Where do you want to work?
              </h2>
              <p className="text-xs text-slate-500">
                Define your target industry, role title, location, and work mode.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Target Industry</label>
                <input
                  value={targetIndustry}
                  onChange={(e) => setTargetIndustry(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 outline-none font-semibold text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Target Role</label>
                <input
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 outline-none font-semibold text-slate-900 dark:text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Location</label>
                  <input
                    value={targetLocation}
                    onChange={(e) => setTargetLocation(e.target.value)}
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

            <div className="flex gap-3">
              <Button variant="outline" className="w-1/3" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button variant="primary" className="w-2/3" onClick={() => setStep(3)}>
                Run Discovery Engine <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Card>
        )}

        {step === 3 && (
          <Card className="p-8 space-y-6 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6 animate-pulse" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Launch Campaign Discovery
              </h2>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Mailvora will search for companies hiring for {targetRole} in {targetLocation}.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-xs space-y-2 text-left">
              <div className="flex items-center gap-2 text-emerald-500 font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Resume Parsed & Ready
              </div>
              <div className="flex items-center gap-2 text-emerald-500 font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Target: {targetIndustry} • {targetLocation}
              </div>
              <div className="flex items-center gap-2 text-indigo-500 font-semibold">
                <Sparkles className="w-4 h-4" /> Ready to discover ~42 companies & 67 contacts
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full font-bold"
              onClick={handleRunDiscovery}
              disabled={isDiscovering}
            >
              {isDiscovering ? 'Discovering Companies...' : 'Launch Campaign & Enter Dashboard'}
            </Button>
          </Card>
        )}
      </div>

      {/* Footer Assurances */}
      <div className="max-w-4xl mx-auto w-full text-center text-xs text-slate-400">
        Mailvora Core UX Assurance • Review → Approve → Send
      </div>
    </div>
  );
}
