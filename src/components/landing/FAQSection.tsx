'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const faqs = [
    {
      q: 'How does Mailvora work?',
      a: 'Mailvora takes your resume and career target (industry, role, location) to discover relevant companies and recruiter contacts. It then generates personalized outreach drafts that you review and approve before sending via Gmail.'
    },
    {
      q: 'How does company discovery work?',
      a: 'Mailvora indexes regional corporate registries and hiring updates to identify companies matching your industry, location, and experience tier.'
    },
    {
      q: 'Where do contact details come from?',
      a: 'Contacts are gathered from official company careers pages, public business registries, and verified recruiter directories with complete source transparency.'
    },
    {
      q: 'How does Gmail integration work?',
      a: 'Mailvora connects safely using Google OAuth 2.0. We never ask for your password. Approved emails are sent directly through your Gmail account so replies arrive directly in your inbox.'
    },
    {
      q: 'Can I edit AI-generated emails?',
      a: 'Yes! Every email draft is 100% editable. You can tweak the subject, body, variables, or regenerate the text with different tone preferences.'
    },
    {
      q: 'Can I approve emails before sending?',
      a: 'Absolutely. By default, Mailvora operates strictly under a "Review → Approve → Send" workflow. Nothing is sent without your explicit 1-click approval.'
    },
    {
      q: 'How are duplicates prevented?',
      a: 'Mailvora maintains an automated duplicate protection index. If you attempt to reach out to a recruiter you recently contacted, a safeguard modal alerts you and prevents duplicate sending.'
    },
    {
      q: 'How do follow-ups work?',
      a: 'If a recruiter doesn’t reply within a set period (e.g. 4–5 days), Mailvora flags the contact for a polite, contextual follow-up draft.'
    },
    {
      q: 'Can I stop a campaign?',
      a: 'Yes. You can pause or stop any active campaign at any time with a single click in your dashboard.'
    },
    {
      q: 'Can I export my data?',
      a: 'Yes! You can export your full campaign history, discovered company list, contacts, and outreach status as CSV or JSON anytime.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#080B12] border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Everything you need to know about Mailvora’s AI job outreach engine.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200 dark:border-[#242B38] bg-slate-50/50 dark:bg-[#10141D]/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-slate-100 text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-indigo-500' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/60 dark:border-slate-800/60 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
