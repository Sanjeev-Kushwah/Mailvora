'use client';

import React from 'react';
import { checkPasswordCriteria } from '@/lib/validation';
import { Check, X } from 'lucide-react';

interface PasswordStrengthProps {
  password?: string;
}

export function PasswordStrength({ password = '' }: PasswordStrengthProps) {
  if (!password) return null;

  const criteria = checkPasswordCriteria(password);

  const items = [
    { label: 'At least 8 characters', met: criteria.minLength },
    { label: 'One uppercase letter', met: criteria.hasUppercase },
    { label: 'One lowercase letter', met: criteria.hasLowercase },
    { label: 'One number', met: criteria.hasNumber },
  ];

  return (
    <div className="space-y-1.5 pt-1 text-[11px]">
      <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">
        Password requirements:
      </span>
      <div className="grid grid-cols-2 gap-1.5">
        {items.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-1.5 font-medium transition-colors ${
              item.met
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-slate-400 dark:text-slate-500'
            }`}
          >
            {item.met ? (
              <Check className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
            ) : (
              <X className="w-3.5 h-3.5 shrink-0 text-slate-400" />
            )}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
