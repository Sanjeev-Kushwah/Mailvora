'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export function Card({ children, className = '', onClick, hoverEffect = false }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl border border-slate-200 dark:border-[#242B38] bg-white dark:bg-[#10141D] text-slate-900 dark:text-slate-100 shadow-sm transition-all duration-200 ${
        hoverEffect ? 'hover:border-indigo-500/40 hover:shadow-md cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
