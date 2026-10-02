'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Building2, Users, Send, FileText, Settings, Sparkles, X, ArrowRight } from 'lucide-react';
import { mockCompanies, mockContacts, mockCampaigns, mockTemplates } from '@/services/mockData';

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelect = (path: string) => {
    setIsOpen(false);
    setQuery('');
    router.push(path);
  };

  const filteredCompanies = mockCompanies.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) || c.industry.toLowerCase().includes(query.toLowerCase())
  );

  const filteredContacts = mockContacts.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) || c.companyName.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCampaigns = mockCampaigns.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-2xl bg-white dark:bg-[#10141D] rounded-2xl border border-slate-200 dark:border-[#242B38] shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-[#242B38] gap-3">
              <Search className="w-5 h-5 text-indigo-500 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search companies, contacts, campaigns, emails..."
                className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-slate-100"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg text-xs"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Actions & Search Results */}
            <div className="max-h-96 overflow-y-auto p-2 space-y-3">
              {/* Core Navigation Shortcuts */}
              <div>
                <div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Quick Navigation
                </div>
                <div className="mt-1 space-y-0.5">
                  <button
                    onClick={() => handleSelect('/dashboard')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium hover:bg-slate-100 dark:hover:bg-[#161B26] transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-indigo-500" />
                      Dashboard Overview
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleSelect('/campaigns/new')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium hover:bg-slate-100 dark:hover:bg-[#161B26] transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Send className="w-4 h-4 text-emerald-500" />
                      Create New Campaign
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleSelect('/settings')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium hover:bg-slate-100 dark:hover:bg-[#161B26] transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Settings className="w-4 h-4 text-slate-400" />
                      Workspace Settings
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Companies Section */}
              {filteredCompanies.length > 0 && (
                <div>
                  <div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Companies ({filteredCompanies.length})
                  </div>
                  <div className="mt-1 space-y-0.5">
                    {filteredCompanies.slice(0, 3).map((company) => (
                      <button
                        key={company.id}
                        onClick={() => handleSelect('/companies')}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs hover:bg-slate-100 dark:hover:bg-[#161B26] transition-colors"
                      >
                        <span className="flex items-center gap-2.5 truncate">
                          <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                          <span className="font-semibold">{company.name}</span>
                          <span className="text-slate-400 text-[11px]">({company.industry})</span>
                        </span>
                        <span className="text-[11px] text-indigo-500 font-medium">{company.location}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Contacts Section */}
              {filteredContacts.length > 0 && (
                <div>
                  <div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Recruiter Contacts ({filteredContacts.length})
                  </div>
                  <div className="mt-1 space-y-0.5">
                    {filteredContacts.slice(0, 3).map((contact) => (
                      <button
                        key={contact.id}
                        onClick={() => handleSelect('/contacts')}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs hover:bg-slate-100 dark:hover:bg-[#161B26] transition-colors"
                      >
                        <span className="flex items-center gap-2.5 truncate">
                          <Users className="w-4 h-4 text-slate-400 shrink-0" />
                          <span className="font-semibold">{contact.name}</span>
                          <span className="text-slate-400 text-[11px]">at {contact.companyName}</span>
                        </span>
                        <span className="text-[11px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full font-medium">
                          {contact.status}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer hints */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-[#161B26] border-t border-slate-200 dark:border-[#242B38] text-[11px] text-slate-400">
              <span>Use <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">↓</kbd> to navigate</span>
              <span><kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">ESC</kbd> to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
