'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FileText, CheckCircle2, Upload, Sparkles, ShieldCheck } from 'lucide-react';
import { mockResume } from '@/services/mockData';

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Resume Intelligence & Extracted Profile
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Manage your active candidate resume and inspect AI extraction accuracy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 space-y-4 shadow-xl border-indigo-500/30">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-500" /> Active Resume File
            </h3>
            <span className="text-[11px] text-emerald-500 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Parsed
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
            <div className="font-bold text-slate-900 dark:text-white">
              {mockResume.fileName}
            </div>
            <div className="text-slate-500">File Size: {mockResume.fileSize}</div>
            <div className="text-slate-500">Uploaded: {mockResume.uploadedAt}</div>
          </div>

          <Button variant="outline" className="w-full">
            <Upload className="w-4 h-4" /> Replace / Update Resume
          </Button>
        </Card>

        <Card className="p-6 space-y-4 shadow-xl">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
            Extracted Intelligence Summary
          </h3>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Candidate Name</span>
              <span className="font-bold text-slate-900 dark:text-white text-sm">{mockResume.parsedData.name}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Primary Domain</span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">{mockResume.parsedData.primaryRole}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Years of Experience</span>
              <span className="font-bold text-slate-900 dark:text-white">{mockResume.parsedData.experienceYears} Years</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium mb-1.5">Parsed Tools & Skills</span>
              <div className="flex flex-wrap gap-1.5">
                {mockResume.parsedData.skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold text-[11px]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
