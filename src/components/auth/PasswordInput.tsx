'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function PasswordInput({
  label = 'Password',
  error,
  id = 'password',
  className = '',
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1 text-xs">
      {label && (
        <label htmlFor={id} className="block font-bold text-slate-700 dark:text-slate-300">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          autoComplete={props.autoComplete || 'current-password'}
          className={`w-full px-3.5 py-3 pr-10 rounded-xl bg-slate-50 dark:bg-[#161B26] border text-slate-900 dark:text-white text-sm outline-none transition-all ${
            error
              ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
              : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
          } ${className}`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>

      {error && <p className="text-rose-500 text-[11px] font-semibold mt-1">{error}</p>}
    </div>
  );
}
