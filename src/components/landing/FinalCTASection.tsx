'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-brand-950 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.2),transparent_70%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30">
          <Sparkles className="w-4 h-4 text-indigo-400" /> Start your campaign in 2 minutes
        </div>

        <h2 className="text-3xl sm:text-6xl font-black tracking-tight leading-tight">
          Your next opportunity could start with one email.
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Let Mailvora handle the repetitive research and outreach workflow while you focus on the recruiter conversation.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/onboarding" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-4 text-base">
              Start with Mailvora
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
          <a href="#workflow" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-700 text-slate-200 hover:bg-slate-800 px-8 py-4 text-base">
              Explore the workflow
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
