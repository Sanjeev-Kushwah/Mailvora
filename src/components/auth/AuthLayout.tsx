'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/common/Logo';
import { ThemeSelector } from '@/components/common/ThemeSelector';
import { AuthProductPreview } from './AuthProductPreview';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-slate-50 dark:bg-[#080B12] text-slate-900 dark:text-slate-100">
      {/* Left Brand Visual Panel (Desktop) */}
      <AuthProductPreview />

      {/* Right Form Container */}
      <div className="flex flex-col justify-between p-6 sm:p-12 relative">
        {/* Top Header Controls */}
        <div className="flex items-center justify-between">
          <Link href="/" className="lg:hidden">
            <Logo size="md" />
          </Link>
          <div className="ml-auto">
            <ThemeSelector />
          </div>
        </div>

        {/* Form Body */}
        <div className="w-full max-w-md mx-auto my-auto py-8">
          {children}
        </div>

        {/* Footer info */}
        <div className="text-center text-xs text-slate-400">
          Protected by Mailvora Auth Guards & OAuth 2.0 Security
        </div>
      </div>
    </div>
  );
}
