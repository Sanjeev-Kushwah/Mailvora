'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutDashboard, Send, Users, Inbox, User } from 'lucide-react';

export function MobileNav() {
  const pathname = usePathname();

  const items = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/campaigns', label: 'Campaigns', icon: Send },
    { href: '/contacts', label: 'Contacts', icon: Users },
    { href: '/queue', label: 'Queue', icon: Inbox },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#10141D]/95 backdrop-blur-md border-t border-slate-200 dark:border-[#242B38] px-2 py-2 flex items-center justify-around select-none">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl text-[10px] font-semibold transition-colors ${
              isActive
                ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
