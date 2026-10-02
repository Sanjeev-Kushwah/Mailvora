'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Landmark, 
  Cpu, 
  Cloud, 
  HeartPulse, 
  ShoppingBag, 
  Truck, 
  Headphones 
} from 'lucide-react';

export function TrustStrip() {
  const categories = [
    { name: 'Insurance', icon: ShieldCheck },
    { name: 'Banking', icon: Landmark },
    { name: 'Technology', icon: Cpu },
    { name: 'SaaS', icon: Cloud },
    { name: 'Healthcare', icon: HeartPulse },
    { name: 'E-commerce', icon: ShoppingBag },
    { name: 'Logistics', icon: Truck },
    { name: 'BPO & Services', icon: Headphones },
  ];

  return (
    <div className="py-10 border-y border-slate-200/80 dark:border-[#242B38]/80 bg-slate-50/50 dark:bg-[#10141D]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6">
          Tailored for high-impact hiring across key industries
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-items-center">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white dark:hover:bg-[#161B26] transition-colors text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 w-full"
              >
                <Icon className="w-5 h-5 text-indigo-500/80" />
                <span className="text-xs font-medium text-center">{cat.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
