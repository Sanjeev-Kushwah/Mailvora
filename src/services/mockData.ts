import { 
  User, 
  Resume, 
  CareerPreference, 
  Campaign, 
  Company, 
  Contact, 
  Email, 
  EmailTemplate, 
  FollowUp, 
  GmailConnection,
  NotificationItem
} from '@/types';

export const mockUser: User = {
  id: 'usr_101',
  name: 'Sanjeev Kushwah',
  email: 'sanjeev@example.com',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  roleTitle: 'Customer Support & Operations Specialist',
  createdAt: '2026-09-01'
};

export const mockResume: Resume = {
  id: 'res_01',
  fileName: 'Sanjeev_Kushwah_Resume_2026.pdf',
  fileSize: '2.4 MB',
  uploadedAt: '2026-09-28',
  parsedData: {
    name: 'Sanjeev Kushwah',
    email: 'sanjeev@example.com',
    phone: '+91 98765 43210',
    experienceYears: 2.5,
    primaryRole: 'Customer Support / Claims Analyst',
    targetIndustry: 'Insurance & Financial Services',
    skills: [
      'CRM Operations',
      'Claims Processing',
      'Customer Escalation Management',
      'Zendesk / Salesforce Service Cloud',
      'Policy Administration',
      'Cross-functional Communication',
      'Bilingual Support'
    ],
    summary: 'Customer Support Specialist with 2.5+ years of experience in high-volume customer queries, claims verification, and escalation handling across insurance platforms.',
    companiesWorked: ['Star Care Services', 'Pinnacle Solutions']
  }
};

export const mockCareerPreference: CareerPreference = {
  targetIndustry: 'Insurance',
  targetRole: 'Customer Support / Claims Analyst',
  location: 'Pune',
  experienceLevel: '1–3 years',
  workMode: 'On-site',
  employmentType: 'Full-time'
};

export const mockCampaigns: Campaign[] = [
  {
    id: 'cmp_01',
    name: 'Insurance — Pune',
    industry: 'Insurance',
    role: 'Customer Support',
    location: 'Pune',
    companiesCount: 42,
    contactsCount: 67,
    preparedCount: 64,
    sentCount: 41,
    responseCount: 7,
    status: 'Active',
    createdAt: '2026-09-25'
  },
  {
    id: 'cmp_02',
    name: 'Financial Services — Mumbai',
    industry: 'Banking',
    role: 'Client Success Specialist',
    location: 'Mumbai',
    companiesCount: 28,
    contactsCount: 44,
    preparedCount: 30,
    sentCount: 24,
    responseCount: 4,
    status: 'Active',
    createdAt: '2026-09-20'
  },
  {
    id: 'cmp_03',
    name: 'Tech SaaS Support — Remote',
    industry: 'SaaS',
    role: 'Support Engineer',
    location: 'Remote',
    companiesCount: 35,
    contactsCount: 52,
    preparedCount: 50,
    sentCount: 50,
    responseCount: 8,
    status: 'Completed',
    createdAt: '2026-09-10'
  }
];

export const mockCompanies: Company[] = [
  {
    id: 'comp_01',
    name: 'Bajaj Allianz General Insurance',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=120&q=80',
    industry: 'Insurance',
    location: 'Vimannagar, Pune',
    website: 'https://www.bajajallianz.com',
    size: '10,000+ employees',
    description: 'Leading general insurance provider offering health, motor, and personal line protection.',
    relevantRolesCount: 4,
    contactCount: 3,
    status: 'Targeted',
    source: 'Company Careers Directory'
  },
  {
    id: 'comp_02',
    name: 'Go Digit General Insurance',
    logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=120&q=80',
    industry: 'Insurance / InsurTech',
    location: 'Kalyani Nagar, Pune',
    website: 'https://www.godigit.com',
    size: '3,000+ employees',
    description: 'Technology-first insurance company simplifying health, travel, and vehicle insurance.',
    relevantRolesCount: 3,
    contactCount: 2,
    status: 'Targeted',
    source: 'Public Recruitment Index'
  },
  {
    id: 'comp_03',
    name: 'HDFC ERGO General Insurance',
    logo: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=120&q=80',
    industry: 'Insurance',
    location: 'Shivajinagar, Pune',
    website: 'https://www.hdfcergo.com',
    size: '8,000+ employees',
    description: 'Joint venture insurance enterprise providing comprehensive customer risk underwriting.',
    relevantRolesCount: 2,
    contactCount: 2,
    status: 'Targeted',
    source: 'Company Careers Directory'
  },
  {
    id: 'comp_04',
    name: 'ACKO General Insurance',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=120&q=80',
    industry: 'InsurTech',
    location: 'Baner, Pune',
    website: 'https://www.acko.com',
    size: '1,500+ employees',
    description: 'Digital native insurer providing zero-commission motor and employee health plans.',
    relevantRolesCount: 5,
    contactCount: 4,
    status: 'Targeted',
    source: 'Verified Careers Portal'
  },
  {
    id: 'comp_05',
    name: 'Star Health & Allied Insurance',
    logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=120&q=80',
    industry: 'Insurance',
    location: 'Kothrud, Pune',
    website: 'https://www.starhealth.in',
    size: '12,000+ employees',
    description: 'India’s premier standalone health insurance organization.',
    relevantRolesCount: 3,
    contactCount: 2,
    status: 'Discovered',
    source: 'Public Directory'
  },
  {
    id: 'comp_06',
    name: 'ICICI Lombard General Insurance',
    logo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=120&q=80',
    industry: 'Insurance',
    location: 'Kharadi, Pune',
    website: 'https://www.icicilombard.com',
    size: '11,000+ employees',
    description: 'Financial powerhouse offering multi-line non-life insurance products.',
    relevantRolesCount: 4,
    contactCount: 3,
    status: 'Targeted',
    source: 'Company Careers Portal'
  }
];

export const mockContacts: Contact[] = [
  {
    id: 'cnt_01',
    companyId: 'comp_01',
    companyName: 'Bajaj Allianz General Insurance',
    name: 'Priya Sharma',
    role: 'Lead Talent Acquisition Manager — Customer Operations',
    email: 'priya.sharma@bajajallianz.co.in',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    source: 'Company careers page',
    verificationStatus: 'Verified',
    status: 'Replied',
    lastContactDate: '2026-09-29'
  },
  {
    id: 'cnt_02',
    companyId: 'comp_02',
    companyName: 'Go Digit General Insurance',
    name: 'Amit Verma',
    role: 'Senior Recruiter — Operations & Claims',
    email: 'amit.v@godigit.com',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80',
    source: 'Verified Careers Portal',
    verificationStatus: 'Verified',
    status: 'Replied',
    lastContactDate: '2026-09-30'
  },
  {
    id: 'cnt_03',
    companyId: 'comp_03',
    companyName: 'HDFC ERGO General Insurance',
    name: 'Sneha Deshmukh',
    role: 'Talent Acquisition Partner',
    email: 'sneha.d@hdfcergo.com',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
    source: 'Company careers page',
    verificationStatus: 'Verified',
    status: 'Contacted',
    lastContactDate: '2026-09-28'
  },
  {
    id: 'cnt_04',
    companyId: 'comp_04',
    companyName: 'ACKO General Insurance',
    name: 'Rohan Kulkarni',
    role: 'HR Specialist — Customer Experience Talent',
    email: 'rohan.k@acko.com',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
    source: 'Recruiter Index',
    verificationStatus: 'Needs review',
    status: 'Approved',
    lastContactDate: '2026-09-30'
  },
  {
    id: 'cnt_05',
    companyId: 'comp_06',
    companyName: 'ICICI Lombard General Insurance',
    name: 'Meera Iyer',
    role: 'Head of Recruitment — Service Delivery',
    email: 'meera.iyer@icicilombard.com',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&q=80',
    source: 'Company careers portal',
    verificationStatus: 'Verified',
    status: 'Needs review'
  }
];

export const mockEmails: Email[] = [
  {
    id: 'eml_01',
    campaignId: 'cmp_01',
    campaignName: 'Insurance — Pune',
    companyId: 'comp_01',
    companyName: 'Bajaj Allianz General Insurance',
    contactId: 'cnt_01',
    recipientName: 'Priya Sharma',
    recipientEmail: 'priya.sharma@bajajallianz.co.in',
    recipientRole: 'Lead Talent Acquisition Manager',
    subject: 'Application & Introduction — Customer Support Opportunity (Sanjeev Kushwah)',
    body: `Hi Priya,\n\nI noticed Bajaj Allianz's recent expansion of the customer service team in Vimannagar. With 2.5 years of experience resolving complex customer claims and maintaining 96%+ satisfaction scores in high-volume environments, I am eager to contribute to your operations in Pune.\n\nMy background includes hands-on expertise in CRM tools (Zendesk & Salesforce), policy query resolution, and escalation management. Attached is my resume for your reference.\n\nWould you be open to a 10-minute introductory conversation this week?\n\nBest regards,\nSanjeev Kushwah`,
    attachmentName: 'Sanjeev_Kushwah_Resume_2026.pdf',
    attachmentSize: '2.4 MB',
    status: 'Sent',
    sentAt: '2026-09-29 10:14 AM',
    responseReceivedAt: '2026-09-29 02:45 PM',
    responseSnippet: 'Hi Sanjeev, Thanks for reaching out! Your experience with Zendesk and claims resolution aligns well with an open position in our Vimannagar office. Let’s schedule a quick call this Thursday.',
    personalizationScore: 98
  },
  {
    id: 'eml_02',
    campaignId: 'cmp_01',
    campaignName: 'Insurance — Pune',
    companyId: 'comp_02',
    companyName: 'Go Digit General Insurance',
    contactId: 'cnt_02',
    recipientName: 'Amit Verma',
    recipientEmail: 'amit.v@godigit.com',
    recipientRole: 'Senior Recruiter — Operations',
    subject: 'Customer Support Specialist Inquiry — Sanjeev Kushwah',
    body: `Hi Amit,\n\nI have been following Go Digit's innovative tech-driven approach to simplified claims. Having handled front-line customer escalations and claims verification for 2.5 years in Pune, I would love to explore how my experience fits your team's current hiring goals.\n\nI specialize in fast-turnaround policy support and CRM workflow management. I have attached my resume for your review.\n\nLooking forward to connecting.\n\nWarm regards,\nSanjeev Kushwah`,
    attachmentName: 'Sanjeev_Kushwah_Resume_2026.pdf',
    attachmentSize: '2.4 MB',
    status: 'Sent',
    sentAt: '2026-09-30 09:30 AM',
    responseReceivedAt: '2026-09-30 11:20 AM',
    responseSnippet: 'Hi Sanjeev, Appreciate the direct message. We are currently building out our Kalyani Nagar customer care cohort. Please share your availability for a brief interview.',
    personalizationScore: 95
  },
  {
    id: 'eml_03',
    campaignId: 'cmp_01',
    campaignName: 'Insurance — Pune',
    companyId: 'comp_04',
    companyName: 'ACKO General Insurance',
    contactId: 'cnt_04',
    recipientName: 'Rohan Kulkarni',
    recipientEmail: 'rohan.k@acko.com',
    recipientRole: 'HR Specialist',
    subject: 'Customer Experience Role Inquiry — Sanjeev Kushwah',
    body: `Hi Rohan,\n\nI am reaching out regarding customer support and operations roles at ACKO in Baner, Pune. With 2.5 years of experience in claims verification and customer support, I bring strong problem-solving skills and CRM efficiency to fast-paced teams.\n\nPlease find my resume attached.\n\nBest regards,\nSanjeev Kushwah`,
    attachmentName: 'Sanjeev_Kushwah_Resume_2026.pdf',
    attachmentSize: '2.4 MB',
    status: 'Approved',
    scheduledFor: '2026-10-02 02:00 PM',
    personalizationScore: 92
  }
];

export const mockTemplates: EmailTemplate[] = [
  {
    id: 'tmpl_01',
    name: 'Recruiter Introduction',
    category: 'Recruiter Introduction',
    subject: 'Application & Introduction — {{role}} ({{candidate_name}})',
    body: `Hi {{first_name}},\n\nI noticed {{company_name}}'s recent hiring for {{role}} in {{location}}. With my experience in relevant domain workflows and CRM tools, I am eager to contribute to your team.\n\nAttached is my resume for your review. Would you be open to a 10-minute call this week?\n\nBest regards,\n{{candidate_name}}`,
    variables: ['{{first_name}}', '{{company_name}}', '{{role}}', '{{location}}', '{{candidate_name}}']
  },
  {
    id: 'tmpl_02',
    name: 'Job Application',
    category: 'Job Application',
    subject: 'Enthusiastic Application for {{role}} at {{company_name}}',
    body: `Hi {{first_name}},\n\nI am writing to express my strong interest in the {{role}} position at {{company_name}}. Having worked in {{industry}} for over 2 years, I have honed key skills in customer escalation resolution and process tracking.\n\nI look forward to discussing how my background aligns with your team's goals.\n\nWarm regards,\n{{candidate_name}}`,
    variables: ['{{first_name}}', '{{company_name}}', '{{role}}', '{{industry}}', '{{candidate_name}}']
  },
  {
    id: 'tmpl_03',
    name: 'Follow-up',
    category: 'Follow-up',
    subject: 'Following up — {{role}} inquiry at {{company_name}}',
    body: `Hi {{first_name}},\n\nI wanted to gently follow up on my previous note regarding the {{role}} opportunity at {{company_name}}.\n\nI remain very interested in contributing to your team in {{location}} and would welcome the opportunity for a brief conversation when convenient.\n\nBest regards,\n{{candidate_name}}`,
    variables: ['{{first_name}}', '{{company_name}}', '{{role}}', '{{location}}', '{{candidate_name}}']
  }
];

export const mockFollowUps: FollowUp[] = [
  {
    id: 'flw_01',
    emailId: 'eml_03',
    recipientName: 'Sneha Deshmukh',
    recipientEmail: 'sneha.d@hdfcergo.com',
    companyName: 'HDFC ERGO General Insurance',
    originalSentDate: '2026-09-28',
    suggestedDate: '2026-10-04',
    status: 'Pending',
    previewText: 'Gentle follow-up regarding Customer Support opportunity sent 4 days ago.'
  }
];

export const mockGmailConnection: GmailConnection = {
  isConnected: true,
  email: 'sanjeev@example.com',
  connectedAt: '2026-09-25 14:30',
  dailyLimit: 50,
  sentToday: 18,
  oauthActive: true
};

export const mockNotifications: NotificationItem[] = [
  {
    id: 'notif_01',
    title: 'Recruiter Replied!',
    message: 'Priya Sharma from Bajaj Allianz replied: "Let\'s schedule a quick call this Thursday."',
    timestamp: '10 mins ago',
    type: 'success',
    read: false,
    link: '/sent'
  },
  {
    id: 'notif_02',
    title: 'Companies Discovered',
    message: '42 relevant companies and 67 recruiter contacts discovered for Insurance — Pune.',
    timestamp: '1 hour ago',
    type: 'info',
    read: false,
    link: '/companies'
  },
  {
    id: 'notif_03',
    title: 'Outreach Queued',
    message: '8 emails approved and queued for Gmail dispatch.',
    timestamp: '3 hours ago',
    type: 'info',
    read: true,
    link: '/queue'
  }
];
