'use client';

import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: number;
  icon?: LucideIcon;
  change?: string;
  suffix?: string;
  color?: 'indigo' | 'emerald' | 'amber' | 'purple' | 'sky';
}

export function MetricCard({
  label,
  value,
  icon: Icon,
  change,
  suffix = '',
  color = 'indigo'
}: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 750;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  const colorVariants = {
    indigo: 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10',
    emerald: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10',
    amber: 'text-amber-600 dark:text-amber-400 bg-amber-500/10',
    purple: 'text-purple-600 dark:text-purple-400 bg-purple-500/10',
    sky: 'text-sky-600 dark:text-sky-400 bg-sky-500/10',
  };

  return (
    <Card className="p-4 sm:p-5 relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide uppercase">
            {label}
          </p>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
              {displayValue.toLocaleString()}{suffix}
            </span>
            {change && (
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {change}
              </span>
            )}
          </div>
        </div>

        {Icon && (
          <div className={`p-2.5 rounded-xl ${colorVariants[color]} shrink-0`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
    </Card>
  );
}
