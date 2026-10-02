'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  BarChart3, 
  Upload, 
  Building2, 
  Users, 
  Mail, 
  Send 
} from 'lucide-react';

export function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: '01',
      id: 1,
      title: 'Resume Intelligence',
      icon: FileText,
      description: 'Upload your PDF/DOCX resume. Mailvora automatically extracts your skills, experience, key achievements, and target domains.'
    },
    {
      number: '02',
      id: 2,
      title: 'Company & Contact Discovery',
      icon: Search,
      description: 'Mailvora scans public directories and careers portals to discover matching companies and verified recruiting contacts in your target city.'
    },
    {
      number: '03',
      id: 3,
      title: 'Context Personalization',
      icon: Sparkles,
      description: 'Every draft is personalized by matching your exact background with the company’s recent initiatives and role requirements.'
    },
    {
      number: '04',
      id: 4,
      title: '1-Click Review & Approval',
      icon: CheckCircle2,
      description: 'Nothing is sent without your green light. Review, edit, or approve outreach emails with complete peace of mind.'
    },
    {
      number: '05',
      id: 5,
      title: 'Gmail Send & Response Tracking',
      icon: BarChart3,
      description: 'Approved emails are dispatched through your personal Gmail OAuth connection, with automated follow-up suggestions for non-responses.'
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-white dark:bg-[#080B12] border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
            Signature Mailvora Flow
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            From resume to recruiter conversation.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A seamless 5-step loop designed to maximize your response rate while keeping you 100% in control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Step Selectors */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-50 dark:bg-[#161B26] border-indigo-500 dark:border-indigo-500 shadow-md scale-[1.01]'
                      : 'bg-white dark:bg-[#10141D] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`}>
                      {step.number}
                    </span>
                    <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`} />
                  </div>
                  <h3 className={`text-base font-bold mt-2 ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Dynamic Visual Canvas */}
          <div className="lg:col-span-7 lg:sticky lg:top-32 rounded-2xl border border-slate-200 dark:border-[#242B38] bg-slate-50 dark:bg-[#10141D] p-6 shadow-xl min-h-[420px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Interactive Stage Visualizer
              </span>
              <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                Step 0{activeStep} / 05
              </span>
            </div>

            <div className="my-auto py-4">
              <AnimatePresence mode="wait">
                {activeStep === 1 && (
                  <motion.div
                    key="w1"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="space-y-4"
                  >
                    <div className="p-4 rounded-xl border border-dashed border-indigo-500/40 bg-indigo-500/5 text-center space-y-2">
                      <Upload className="w-8 h-8 text-indigo-500 mx-auto" />
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        Sanjeev_Kushwah_Resume_2026.pdf (2.4 MB)
                      </div>
                      <div className="text-[11px] text-emerald-500 font-semibold">
                        ✓ Analysis Complete • 98% Extraction Accuracy
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-3 rounded-lg bg-white dark:bg-[#161B26] border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] text-slate-400 block font-medium">Domain</span>
                        <span className="font-semibold text-slate-900 dark:text-white">Customer Support</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white dark:bg-[#161B26] border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] text-slate-400 block font-medium">Tools</span>
                        <span className="font-semibold text-slate-900 dark:text-white">Zendesk, Salesforce</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div
                    key="w2"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-900 dark:text-white">Target: Insurance • Pune</span>
                      <span className="text-indigo-500">42 Companies • 67 Contacts</span>
                    </div>
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-white dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <Building2 className="w-4 h-4 text-indigo-500" />
                          <span className="font-semibold">Bajaj Allianz General Insurance</span>
                        </div>
                        <span className="text-[11px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded font-medium">
                          Priya Sharma (TA Lead)
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <Building2 className="w-4 h-4 text-indigo-500" />
                          <span className="font-semibold">Go Digit General Insurance</span>
                        </div>
                        <span className="text-[11px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded font-medium">
                          Amit Verma (Recruiter)
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 3 && (
                  <motion.div
                    key="w3"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="space-y-3 text-xs"
                  >
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                        <span>To: priya.sharma@bajajallianz.co.in</span>
                        <span className="text-xs text-indigo-500 font-semibold">98% Match</span>
                      </div>
                      <div className="text-slate-600 dark:text-slate-300 italic bg-slate-50 dark:bg-[#10141D] p-3 rounded-lg leading-relaxed">
                        "Hi Priya, I noticed Bajaj Allianz's expansion in Vimannagar. With 2.5 years of experience in claims verification and Zendesk CRM operations..."
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 4 && (
                  <motion.div
                    key="w4"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                    <div className="text-base font-bold text-slate-900 dark:text-white">
                      Ready for Your Green Light
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      12 prepared emails queued. Click "Approve & Queue" to authorize automatic dispatch.
                    </p>
                  </motion.div>
                )}

                {activeStep === 5 && (
                  <motion.div
                    key="w5"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="space-y-3"
                  >
                    <div className="p-4 rounded-xl bg-white dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">Gmail Integration Active</div>
                        <div className="text-[11px] text-slate-500">Connected: sanjeev@example.com</div>
                      </div>
                      <Send className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
                      <span>7 Recruiter Responses Received</span>
                      <span>10.9% Response Rate</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Mailvora Core UX Principle</span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">Review → Approve → Send</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
