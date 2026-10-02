import React from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { TrustStrip } from '@/components/landing/TrustStrip';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { BeforeAfterSection } from '@/components/landing/BeforeAfterSection';
import { WorkflowSection } from '@/components/landing/WorkflowSection';
import { ResumeSection } from '@/components/landing/ResumeSection';
import { CompanyDiscoverySection } from '@/components/landing/CompanyDiscoverySection';
import { ContactSection } from '@/components/landing/ContactSection';
import { PersonalizationSection } from '@/components/landing/PersonalizationSection';
import { ApprovalSection } from '@/components/landing/ApprovalSection';
import { GmailSection } from '@/components/landing/GmailSection';
import { FollowupSection } from '@/components/landing/FollowupSection';
import { LiveDashboardSection } from '@/components/landing/LiveDashboardSection';
import { AnalyticsPreviewSection } from '@/components/landing/AnalyticsPreviewSection';
import { PrivacySection } from '@/components/landing/PrivacySection';
import { PricingSection } from '@/components/landing/PricingSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { FinalCTASection } from '@/components/landing/FinalCTASection';
import { Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080B12] text-slate-900 dark:text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <BeforeAfterSection />
        <WorkflowSection />
        <ResumeSection />
        <CompanyDiscoverySection />
        <ContactSection />
        <PersonalizationSection />
        <ApprovalSection />
        <GmailSection />
        <FollowupSection />
        <LiveDashboardSection />
        <AnalyticsPreviewSection />
        <PrivacySection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
