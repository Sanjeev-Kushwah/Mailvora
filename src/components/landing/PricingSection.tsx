'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check, Sparkles } from 'lucide-react';

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const plans = [
    {
      name: 'Free',
      description: 'Ideal for trying Mailvora & starting target discovery.',
      priceMonthly: '$0',
      priceYearly: '$0',
      features: [
        '1 Active Campaign',
        '25 Company Discoveries',
        '15 Contact Details',
        'Manual Email Editor',
        'Gmail OAuth Integration',
        'Basic Response Tracking'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Pro',
      description: 'Most popular for active job seekers looking for interviews.',
      priceMonthly: '$19',
      priceYearly: '$15',
      features: [
        '5 Active Campaigns',
        '250 Company Discoveries / mo',
        '150 Verified Contacts / mo',
        'AI Context Personalization',
        '1-Click Approval Queue',
        'Gmail Sending Safeguards',
        'Follow-up Reminders',
        'Response Analytics'
      ],
      cta: 'Get Pro Access',
      popular: true
    },
    {
      name: 'Power',
      description: 'For intensive career transitions & multi-city campaigns.',
      priceMonthly: '$39',
      priceYearly: '$29',
      features: [
        'Unlimited Active Campaigns',
        '1,000 Company Discoveries / mo',
        '500 Verified Contacts / mo',
        'Priority AI Personalization',
        'Custom Email Templates',
        'Advanced Analytics Charts',
        'Priority Support'
      ],
      cta: 'Get Power Access',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50/50 dark:bg-[#10141D]/50 border-b border-slate-200 dark:border-[#242B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Invest in your career speed.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Simple plans designed to help you land recruiter conversations faster.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-200 dark:bg-[#161B26] border border-slate-300 dark:border-slate-800 mt-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <span>Yearly Billing</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-8 flex flex-col justify-between space-y-6 relative ${
                plan.popular
                  ? 'border-2 border-indigo-500 shadow-2xl bg-white dark:bg-[#161B26]'
                  : 'bg-white dark:bg-[#10141D]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-600 text-white text-[11px] font-bold tracking-wider uppercase shadow-md">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 min-h-[32px]">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">
                    {billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/ month</span>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/onboarding">
                <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full">
                  {plan.cta}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
