'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Sparkles, CheckCircle2, Edit3, Eye, RefreshCw, Send, Paperclip } from 'lucide-react';

export function PersonalizationSection() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [genStep, setGenStep] = useState(0);

  const steps = [
    'Analyzing company context...',
    'Matching candidate resume experience...',
    'Tailoring email hook for Pune office...',
    'Email personalization complete!'
  ];

  const handleRegenerate = () => {
    setIsGenerating(true);
    setGenStep(0);
    const timer = setInterval(() => {
      setGenStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          setIsGenerating(false);
          return steps.length - 1;
        }
        return prev + 1;
      });
    }, 600);
  };

  return (
    <section className="py-24 bg-white dark:bg-[#080B12] border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> High-Impact Personalization
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Craft emails recruiters actually want to read.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Mailvora pairs your actual candidate background with company hiring context for authentic, high-converting outreach.
          </p>
        </div>

        {/* Three Column Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* LEFT COLUMN — Company & Candidate Context */}
          <div className="lg:col-span-3 space-y-4">
            <Card className="p-4 space-y-3 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Target Recruiter Context
              </span>
              <div>
                <span className="text-slate-400 block">Company</span>
                <span className="font-bold text-slate-900 dark:text-white">Bajaj Allianz General Insurance</span>
              </div>
              <div>
                <span className="text-slate-400 block">Recipient</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Priya Sharma (TA Lead)</span>
              </div>
              <div>
                <span className="text-slate-400 block">Location Focus</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">Vimannagar, Pune</span>
              </div>
            </Card>

            <Card className="p-4 space-y-3 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Extracted Resume Hooks
              </span>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> 2.5 yrs Claims Experience
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Zendesk & CRM Mastery
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Escalation Management
                </div>
              </div>
            </Card>
          </div>

          {/* CENTER COLUMN — Email Editor & Studio */}
          <div className="lg:col-span-6">
            <Card className="p-5 space-y-4 shadow-xl border-indigo-500/30">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Edit3 className="w-4 h-4 text-indigo-500" /> Mailvora Email Editor
                </span>
                <Button variant="ghost" size="sm" onClick={handleRegenerate} disabled={isGenerating}>
                  <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
                  Regenerate
                </Button>
              </div>

              {isGenerating ? (
                <div className="py-12 text-center space-y-3">
                  <Sparkles className="w-8 h-8 text-indigo-500 mx-auto animate-bounce" />
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{steps[genStep]}</div>
                </div>
              ) : (
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium">To:</span>
                    <input
                      readOnly
                      value="priya.sharma@bajajallianz.co.in"
                      className="w-full mt-1 p-2 rounded-lg bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-mono"
                    />
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Subject:</span>
                    <input
                      readOnly
                      value="Application & Introduction — Customer Support Opportunity (Sanjeev Kushwah)"
                      className="w-full mt-1 p-2 rounded-lg bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold"
                    />
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Body:</span>
                    <textarea
                      rows={6}
                      readOnly
                      value={`Hi Priya,\n\nI noticed Bajaj Allianz's recent expansion of the customer service team in Vimannagar. With 2.5 years of experience resolving complex customer claims and maintaining 96%+ satisfaction scores in high-volume environments, I am eager to contribute to your operations in Pune.\n\nMy background includes hands-on expertise in CRM tools (Zendesk & Salesforce), policy query resolution, and escalation management. Attached is my resume for your reference.\n\nWould you be open to a 10-minute introductory conversation this week?\n\nBest regards,\nSanjeev Kushwah`}
                      className="w-full mt-1 p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 leading-relaxed font-sans outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Paperclip className="w-3.5 h-3.5 text-indigo-500" /> Attached: Sanjeev_Kushwah_Resume.pdf
                    </span>
                    <Button variant="primary" size="sm">
                      Approve & Queue Draft
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* RIGHT COLUMN — Personalization Indicators */}
          <div className="lg:col-span-3 space-y-4">
            <Card className="p-4 space-y-3 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Personalization Signals
              </span>
              <div className="space-y-2.5 font-medium">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Resume Context</span>
                  <span className="text-emerald-500 font-bold">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Company Context</span>
                  <span className="text-emerald-500 font-bold">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Location Context</span>
                  <span className="text-emerald-500 font-bold">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Role Match</span>
                  <span className="text-emerald-500 font-bold">95%</span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold text-center">
                Overall Personalization Score: 98%
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
