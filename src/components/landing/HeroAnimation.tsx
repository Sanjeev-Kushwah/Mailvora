'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  MessageSquareText, 
  Sparkles,
  FileCheck,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export function HeroAnimation() {
  const [scene, setScene] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setScene((prev) => (prev >= 10 ? 1 : prev + 1));
    }, 1100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full rounded-2xl border border-slate-200 dark:border-[#242B38] bg-white dark:bg-[#10141D] shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 font-sans">
      {/* Top Application Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-[#161B26] border-b border-slate-200 dark:border-[#242B38]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Mailvora Live Outreach Engine
          </span>
        </div>
        <div className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium">
          Campaign: Insurance — Pune
        </div>
      </div>

      {/* Main Interactive Hero Interface */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200/80 dark:border-[#242B38]">
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Target</div>
            <div className="text-xs font-bold mt-1 text-indigo-600 dark:text-indigo-400 truncate">Insurance • Pune</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200/80 dark:border-[#242B38]">
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Companies</div>
            <div className="text-lg font-black mt-0.5 text-slate-900 dark:text-slate-100">
              {scene >= 3 ? '42' : '0'}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200/80 dark:border-[#242B38]">
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Contacts</div>
            <div className="text-lg font-black mt-0.5 text-slate-900 dark:text-slate-100">
              {scene >= 4 ? '67' : '0'}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200/80 dark:border-[#242B38]">
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Emails Sent</div>
            <div className="text-lg font-black mt-0.5 text-indigo-600 dark:text-indigo-400">
              {scene >= 9 ? '41' : '40'}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200/80 dark:border-[#242B38]">
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Responses</div>
            <div className="text-lg font-black mt-0.5 text-emerald-600 dark:text-emerald-400">
              {scene >= 10 ? '7' : '6'}
            </div>
          </div>
        </div>

        {/* Dynamic Scene Stage Visualizer */}
        <div className="relative min-h-[220px] rounded-xl border border-slate-200 dark:border-[#242B38] bg-slate-50/50 dark:bg-[#161B26]/50 p-4 sm:p-5 flex flex-col justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {scene === 1 && (
              <motion.div
                key="s1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3 text-center sm:text-left"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" /> Scene 1 • Campaign Target Defined
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Target: Customer Support — Insurance (Pune)
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-lg">
                  Setting up discovery parameters based on candidate’s career preferences...
                </p>
              </motion.div>
            )}

            {scene === 2 && (
              <motion.div
                key="s2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center justify-center gap-3 py-4"
              >
                <FileCheck className="w-10 h-10 text-indigo-500 animate-bounce" />
                <div className="text-sm font-bold text-slate-900 dark:text-white">Analyzing Resume...</div>
                <div className="text-xs text-slate-500">Extracting 2.5 years Customer Operations & Zendesk expertise</div>
              </motion.div>
            )}

            {scene === 3 && (
              <motion.div
                key="s3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" /> 42 Relevant Companies Discovered
                  </span>
                  <span className="text-[11px] text-emerald-500">100% Matched</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-[#10141D] border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-semibold">Bajaj Allianz General Insurance</span>
                    <span className="text-slate-400 text-[11px]">Vimannagar, Pune</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-[#10141D] border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-semibold">Go Digit General Insurance</span>
                    <span className="text-slate-400 text-[11px]">Kalyani Nagar</span>
                  </div>
                </div>
              </motion.div>
            )}

            {scene === 4 && (
              <motion.div
                key="s4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" /> 67 Recruiting Contacts Found
                  </span>
                  <span className="text-[11px] text-slate-400">Verified Careers Directory</span>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-[#10141D] border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-500 font-bold text-xs flex items-center justify-center shrink-0">
                    PS
                  </div>
                  <div className="flex-1 min-w-0 text-xs">
                    <div className="font-bold text-slate-900 dark:text-slate-100">Priya Sharma</div>
                    <div className="text-slate-500 dark:text-slate-400 text-[11px] truncate">
                      Lead Talent Acquisition Manager • Bajaj Allianz
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-[10px] font-medium">
                    Verified
                  </span>
                </div>
              </motion.div>
            )}

            {scene === 5 && (
              <motion.div
                key="s5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-2 text-center py-2"
              >
                <Sparkles className="w-8 h-8 text-indigo-500 mx-auto animate-spin-slow" />
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Personalizing Outreach Message...
                </div>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Connecting candidate’s Zendesk & claims experience with Bajaj Allianz’s Vimannagar office expansion.
                </p>
              </motion.div>
            )}

            {scene === 6 && (
              <motion.div
                key="s6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-2 text-xs"
              >
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white pb-1 border-b border-slate-200 dark:border-slate-800">
                  <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-4 h-4" /> Email Draft Prepared
                  </span>
                  <span className="text-[10px] text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded font-mono">
                    Awaiting Approval
                  </span>
                </div>
                <div className="font-medium text-slate-700 dark:text-slate-300">
                  To: priya.sharma@bajajallianz.co.in
                </div>
                <div className="text-slate-500 dark:text-slate-400 bg-white dark:bg-[#10141D] p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 italic line-clamp-2">
                  "Hi Priya, I noticed Bajaj Allianz's expansion in Vimannagar. With 2.5 years in claims resolution..."
                </div>
              </motion.div>
            )}

            {scene === 7 && (
              <motion.div
                key="s7"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wide">Approved by User</div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      Email queued for scheduled dispatch via Gmail
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-emerald-500 text-white rounded-lg shadow-xs">
                  Approved
                </span>
              </motion.div>
            )}

            {scene === 8 && (
              <motion.div
                key="s8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center justify-between p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400"
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 animate-spin-slow shrink-0" />
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wide">Outreach Queue</div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      Position #1 • Scheduled delay active (safeguard)
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 bg-indigo-600 text-white rounded-lg">
                  Queued
                </span>
              </motion.div>
            )}

            {scene === 9 && (
              <motion.div
                key="s9"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center justify-between p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400"
              >
                <div className="flex items-center gap-3">
                  <Send className="w-6 h-6 shrink-0" />
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wide">Sent via Gmail OAuth</div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      Delivered directly to priya.sharma@bajajallianz.co.in
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Sent
                </span>
              </motion.div>
            )}

            {scene === 10 && (
              <motion.div
                key="s10"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border border-emerald-500/30 text-slate-900 dark:text-white space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <MessageSquareText className="w-4 h-4" /> Recruiter Replied!
                  </span>
                  <span className="text-[10px] text-slate-400">Just now</span>
                </div>
                <div className="text-xs font-medium italic text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-[#10141D]/80 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  "Hi Sanjeev, Thanks for reaching out! Your claims experience aligns well with an open position in our Vimannagar office. Let’s schedule a call this Thursday."
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Timeline Progression Indicator */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium pt-1">
          <span className="flex items-center gap-1">
            <span className="font-mono text-indigo-500">Step {scene}/10</span>
            <span className="hidden sm:inline">• Automated Workflow Loop</span>
          </span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === scene
                    ? 'w-6 bg-indigo-600'
                    : i < scene
                    ? 'w-2 bg-indigo-500/40'
                    : 'w-2 bg-slate-200 dark:bg-slate-800'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
