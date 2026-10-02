export type ContactStatus = 
  | 'New' 
  | 'Needs review' 
  | 'Approved' 
  | 'Contacted' 
  | 'Replied' 
  | 'Bounced' 
  | 'Opted out';

export type QueueStatus = 
  | 'Draft' 
  | 'Reviewed' 
  | 'Approved' 
  | 'Queued' 
  | 'Sent';

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  roleTitle?: string;
  createdAt: string;
}

export interface Resume {
  id: string;
  fileName: string;
  fileSize: string;
  uploadedAt: string;
  parsedData: {
    name: string;
    email: string;
    phone?: string;
    skills: string[];
    experienceYears: number;
    primaryRole: string;
    targetIndustry: string;
    summary: string;
    companiesWorked?: string[];
  };
}

export interface CareerPreference {
  targetIndustry: string;
  targetRole: string;
  location: string;
  experienceLevel: string;
  workMode: 'On-site' | 'Remote' | 'Hybrid' | 'Any';
  employmentType: 'Full-time' | 'Contract' | 'Part-time';
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  website: string;
  size: string;
  description: string;
  relevantRolesCount: number;
  contactCount: number;
  status: 'Discovered' | 'Reviewing' | 'Targeted' | 'Skipped';
  source: string;
}

export interface Contact {
  id: string;
  companyId: string;
  companyName: string;
  name: string;
  role: string;
  email: string;
  avatar?: string;
  linkedinUrl?: string;
  source: string; // e.g. "Careers Page", "Public Directory", "Recruiter Index"
  verificationStatus: 'Verified' | 'Needs review' | 'Unverified';
  status: ContactStatus;
  lastContactDate?: string;
}

export interface EmailTemplate {
  id: string;
  name: string;
  category: 'Recruiter Introduction' | 'Job Application' | 'Follow-up' | 'Referral Request' | 'General Outreach';
  subject: string;
  body: string;
  variables: string[];
}

export interface Email {
  id: string;
  campaignId: string;
  campaignName: string;
  companyId: string;
  companyName: string;
  contactId: string;
  recipientName: string;
  recipientEmail: string;
  recipientRole: string;
  subject: string;
  body: string;
  attachmentName: string;
  attachmentSize: string;
  status: QueueStatus;
  scheduledFor?: string;
  sentAt?: string;
  responseReceivedAt?: string;
  responseSnippet?: string;
  personalizationScore: number; // e.g. 98%
}

export interface FollowUp {
  id: string;
  emailId: string;
  recipientName: string;
  recipientEmail: string;
  companyName: string;
  originalSentDate: string;
  suggestedDate: string;
  status: 'Scheduled' | 'Pending' | 'Completed' | 'Skipped';
  previewText: string;
}

export interface Campaign {
  id: string;
  name: string;
  industry: string;
  role: string;
  location: string;
  companiesCount: number;
  contactsCount: number;
  preparedCount: number;
  sentCount: number;
  responseCount: number;
  status: 'Active' | 'Paused' | 'Completed' | 'Draft';
  createdAt: string;
}

export interface GmailConnection {
  isConnected: boolean;
  email: string;
  connectedAt: string;
  dailyLimit: number;
  sentToday: number;
  oauthActive: boolean;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  link?: string;
}

export interface MetricStat {
  label: string;
  value: number;
  change?: string;
  description?: string;
}
