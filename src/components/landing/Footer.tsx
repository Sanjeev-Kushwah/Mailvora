'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/common/Logo';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#080B12] border-t border-slate-200 dark:border-[#242B38] py-16 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              AI-powered job outreach for modern job seekers. Reach the right companies without repetitive work.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">Product</h5>
            <ul className="space-y-2">
              <li><a href="#workflow" className="hover:text-slate-900 dark:hover:text-white">How it works</a></li>
              <li><a href="#features" className="hover:text-slate-900 dark:hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-slate-900 dark:hover:text-white">Pricing</a></li>
              <li><Link href="/dashboard" className="hover:text-slate-900 dark:hover:text-white">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">Resources</h5>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-slate-900 dark:hover:text-white">FAQ</a></li>
              <li><span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">Outreach Guides</span></li>
              <li><span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">Email Templates</span></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">Legal & Privacy</h5>
            <ul className="space-y-2">
              <li><span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">Terms of Service</span></li>
              <li><span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">Google OAuth Privacy</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div>© {new Date().getFullYear()} Mailvora Inc. All rights reserved.</div>
          <div>Designed with original Mailvora identity.</div>
        </div>
      </div>
    </footer>
  );
}
