'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/common/Logo';
import { 
  Home,
  LayoutDashboard, 
  FileText, 
  Send, 
  Building2, 
  Users, 
  Inbox, 
  Mail, 
  Clock, 
  FileSpreadsheet, 
  BarChart3, 
  MailCheck, 
  Settings,
  Sparkles
} from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();

  const navGroups = [
    {
      label: 'Overview',
      items: [
        { href: '/', label: 'Home Page', icon: Home },
        { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      ]
    },
    {
      label: 'Workspace',
      items: [
        { href: '/resume', label: 'Resume Intelligence', icon: FileText },
        { href: '/campaigns', label: 'Campaigns', icon: Send },
        { href: '/companies', label: 'Companies', icon: Building2 },
        { href: '/contacts', label: 'Recruiter Contacts', icon: Users },
      ]
    },
    {
      label: 'Outreach',
      items: [
        { href: '/queue', label: 'Email Queue', icon: Inbox },
        { href: '/sent', label: 'Sent History', icon: Mail },
        { href: '/followups', label: 'Follow-ups', icon: Clock },
        { href: '/templates', label: 'Templates', icon: FileSpreadsheet },
      ]
    },
    {
      label: 'Insights & Integrations',
      items: [
        { href: '/analytics', label: 'Analytics', icon: BarChart3 },
        { href: '/integrations/gmail', label: 'Gmail Connection', icon: MailCheck },
      ]
    }
  ];

  return (
    <aside className="w-64 hidden md:flex flex-col bg-white dark:bg-[#10141D] border-r border-slate-200 dark:border-[#242B38] h-screen sticky top-0 z-30 select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-200 dark:border-[#242B38] flex items-center justify-between">
        <Link href="/">
          <Logo size="md" />
        </Link>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">
          PRO
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {navGroups.map((group) => (
          <div key={group.label}>
            <div className="px-3 mb-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {group.label}
            </div>
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-[#161B26]'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Settings */}
      <div className="p-4 border-t border-slate-200 dark:border-[#242B38]">
        <Link
          href="/settings"
          className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
            pathname === '/settings'
              ? 'bg-slate-100 dark:bg-[#161B26] text-slate-900 dark:text-white'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-[#161B26]'
          }`}
        >
          <Settings className="w-4 h-4" />
          <span>Workspace Settings</span>
        </Link>
      </div>
    </aside>
  );
}
