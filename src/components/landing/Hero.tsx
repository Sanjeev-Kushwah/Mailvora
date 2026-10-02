'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { HeroAnimation } from './HeroAnimation';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden ambient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            AI-powered job outreach platform
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
            Reach the right companies.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-electric-400">
              Without the repetitive work.
            </span>
          </h1>

          {/* Supporting text */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Mailvora discovers relevant companies, identifies appropriate recruiting contacts, personalizes your outreach and keeps your job search organized.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/onboarding" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto font-semibold px-8 py-4 text-base">
                Start for free
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <a href="#workflow" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto px-8 py-4 text-base">
                See how it works
              </Button>
            </a>
          </div>

          {/* Trust assurances */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-500" /> You stay in control
            </span>
          </div>
        </div>

        {/* Hero Interactive Visual Component */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <HeroAnimation />
        </div>
      </div>
    </section>
  );
}
