'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'symbol';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
}

export function Logo({ 
  className = '', 
  variant = 'full', 
  size = 'md',
  href = '/',
  onClick
}: LogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const logoContent = (
    <div className={`inline-flex items-center gap-2.5 select-none cursor-pointer group ${className}`}>
      {/* High-res uploaded squircle emblem icon */}
      <img
        src="/logo-icon.png"
        alt="Mailvora Emblem"
        className={`${iconSizes[size]} object-contain drop-shadow-sm transition-transform duration-150 group-hover:scale-105`}
      />

      {variant === 'full' && (
        <span className={`font-extrabold ${textSizes[size]} text-slate-900 dark:text-white tracking-tight leading-none`}>
          mailvora
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} aria-label="Mailvora Home">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}


