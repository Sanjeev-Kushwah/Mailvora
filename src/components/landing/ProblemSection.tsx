'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react';

export function ProblemSection() {
  const manualSteps = [
    'Search companies manually',
    'Open 20+ browser tabs',
    'Look for recruiting leads',
    'Hunter / Guess recruiter emails',
    'Write custom email draft',
    'Attach resume file',
    'Send one by one',
    'Track in huge spreadsheets',
    'Remember manual follow-ups',
    'Repeat 50x every single week'
  ];

  const mailvoraSteps = [
    'Discover target companies & recruiters',
    'Personalize tailor-fit outreach drafts',
    'Approve & Queue with 1-click control',
    'Send via Gmail with OAuth protection',
    'Track recruiter responses automatically'
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % manualSteps.length);
    }, 800);
    return () => clearInterval(timer);
  }, [manualSteps.length]);

  return (
    <section className="py-24 bg-white dark:bg-[#080B12] border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Job hunting shouldn't feel like another full-time job.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Job seekers spend up to 15 hours a week doing manual data entry instead of having genuine recruiter conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Manual Workflow */}
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-6">
                Manual Workflow (15+ hrs/week)
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                The exhausting repetitive loop
              </h3>

              <div className="space-y-2.5">
                {manualSteps.map((step, idx) => (
                  <motion.div
                    key={step}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-medium transition-all duration-200 ${
                      idx === activeStep
                        ? 'bg-rose-500 text-white border-rose-600 shadow-md scale-[1.02]'
                        : 'bg-white/80 dark:bg-[#10141D]/80 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-300 font-bold text-[10px] flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mailvora Solution */}
          <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-brand-900/5 to-electric-400/5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> Mailvora Engine (10 mins/week)
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                5 streamlined automated steps
              </h3>

              <div className="space-y-4">
                {mailvoraSteps.map((step, idx) => (
                  <div
                    key={step}
                    className="flex items-center gap-3.5 p-4 rounded-xl bg-white dark:bg-[#10141D] border border-indigo-500/20 text-sm font-semibold text-slate-900 dark:text-white shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-indigo-600 text-white text-xs font-semibold text-center shadow-lg shadow-indigo-600/20">
              Mailvora does the heavy lifting. You stay in 100% control of approval.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
