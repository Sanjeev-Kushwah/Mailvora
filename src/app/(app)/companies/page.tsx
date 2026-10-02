'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Drawer } from '@/components/ui/Drawer';
import { Building2, MapPin, Users, Globe, Search, ExternalLink } from 'lucide-react';
import { mockCompanies } from '@/services/mockData';
import { Company } from '@/types';

export default function CompaniesPage() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Discovered Companies
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            42 Target companies matched in Pune for Customer Support & Operations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCompanies.map((comp) => (
          <Card
            key={comp.id}
            hoverEffect
            onClick={() => setSelectedCompany(comp)}
            className="p-5 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={comp.logo}
                    alt={comp.name}
                    className="w-10 h-10 rounded-xl object-cover border border-slate-200 dark:border-slate-800"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">{comp.name}</h3>
                    <p className="text-[11px] text-slate-400">{comp.industry}</p>
                  </div>
                </div>
                <Badge variant="purple">{comp.status}</Badge>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {comp.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> {comp.location}
              </span>
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                {comp.contactCount} Contacts
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Company Detail Drawer (#28) */}
      {selectedCompany && (
        <Drawer
          isOpen={!!selectedCompany}
          onClose={() => setSelectedCompany(null)}
          title={selectedCompany.name}
          subtitle={`${selectedCompany.industry} • ${selectedCompany.location}`}
        >
          <div className="space-y-6 text-xs">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">About Company</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {selectedCompany.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#161B26]">
                <span className="text-slate-400 block font-medium">Company Size</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedCompany.size}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#161B26]">
                <span className="text-slate-400 block font-medium">Discovery Source</span>
                <span className="font-bold text-indigo-500">{selectedCompany.source}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex gap-3">
              <a href={selectedCompany.website} target="_blank" rel="noreferrer" className="flex-1">
                <Button variant="outline" className="w-full">
                  Visit Careers Page <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </Button>
              </a>
              <Button variant="primary" className="flex-1" onClick={() => setSelectedCompany(null)}>
                View Recruiter Leads
              </Button>
            </div>
          </div>
        </Drawer>
      )}
    </div>
  );
}
