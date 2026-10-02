import { 
  mockUser, 
  mockResume, 
  mockCareerPreference, 
  mockCampaigns, 
  mockCompanies, 
  mockContacts, 
  mockEmails, 
  mockTemplates, 
  mockFollowUps, 
  mockGmailConnection,
  mockNotifications
} from './mockData';
import { Campaign, Company, Contact, Email, EmailTemplate, FollowUp, GmailConnection, Resume } from '@/types';

// Campaign Service
export const campaignService = {
  getAll: async (): Promise<Campaign[]> => {
    return new Promise((res) => setTimeout(() => res(mockCampaigns), 100));
  },
  getById: async (id: string): Promise<Campaign | undefined> => {
    return mockCampaigns.find((c) => c.id === id);
  },
  create: async (campaign: Partial<Campaign>): Promise<Campaign> => {
    const newCamp: Campaign = {
      id: `cmp_${Date.now()}`,
      name: campaign.name || 'New Outreach Campaign',
      industry: campaign.industry || 'Technology',
      role: campaign.role || 'Software Engineer',
      location: campaign.location || 'Pune',
      companiesCount: 42,
      contactsCount: 67,
      preparedCount: 0,
      sentCount: 0,
      responseCount: 0,
      status: 'Active',
      createdAt: new Date().toISOString().split('T')[0]
    };
    mockCampaigns.unshift(newCamp);
    return newCamp;
  },
  discover: async (campaignId: string) => {
    return {
      companiesDiscovered: 42,
      contactsFound: 67,
      relevantOpenings: 18
    };
  }
};

// Company Service
export const companyService = {
  getAll: async (): Promise<Company[]> => {
    return mockCompanies;
  },
  getById: async (id: string): Promise<Company | undefined> => {
    return mockCompanies.find((c) => c.id === id);
  }
};

// Contact Service
export const contactService = {
  getAll: async (): Promise<Contact[]> => {
    return mockContacts;
  },
  getByCompanyId: async (companyId: string): Promise<Contact[]> => {
    return mockContacts.filter((c) => c.companyId === companyId);
  }
};

// Email Service
export const emailService = {
  getAll: async (): Promise<Email[]> => {
    return mockEmails;
  },
  getQueue: async (): Promise<Email[]> => {
    return mockEmails.filter((e) => ['Draft', 'Reviewed', 'Approved', 'Queued'].includes(e.status));
  },
  getSent: async (): Promise<Email[]> => {
    return mockEmails.filter((e) => e.status === 'Sent');
  },
  approve: async (id: string): Promise<Email | undefined> => {
    const email = mockEmails.find((e) => e.id === id);
    if (email) {
      email.status = 'Approved';
    }
    return email;
  },
  queue: async (id: string): Promise<Email | undefined> => {
    const email = mockEmails.find((e) => e.id === id);
    if (email) {
      email.status = 'Queued';
    }
    return email;
  },
  send: async (id: string): Promise<Email | undefined> => {
    const email = mockEmails.find((e) => e.id === id);
    if (email) {
      email.status = 'Sent';
      email.sentAt = new Date().toLocaleString();
    }
    return email;
  }
};

// Resume Service
export const resumeService = {
  getResume: async (): Promise<Resume> => {
    return mockResume;
  },
  upload: async (file: File): Promise<Resume> => {
    return {
      ...mockResume,
      fileName: file.name,
      uploadedAt: 'Just now'
    };
  }
};

// Gmail Service
export const gmailService = {
  getStatus: async (): Promise<GmailConnection> => {
    return mockGmailConnection;
  },
  toggleConnection: async (connect: boolean): Promise<GmailConnection> => {
    mockGmailConnection.isConnected = connect;
    mockGmailConnection.oauthActive = connect;
    return mockGmailConnection;
  }
};

// Followup Service
export const followupService = {
  getAll: async (): Promise<FollowUp[]> => {
    return mockFollowUps;
  }
};

// Analytics Service
export const analyticsService = {
  getOverview: async () => {
    return {
      totalCompanies: 248,
      totalContacts: 86,
      totalPrepared: 64,
      totalSent: 41,
      totalResponses: 7,
      responseRate: 10.9,
      weeklyStats: [
        { day: 'Mon', sent: 8, responses: 1 },
        { day: 'Tue', sent: 12, responses: 2 },
        { day: 'Wed', sent: 9, responses: 1 },
        { day: 'Thu', sent: 7, responses: 2 },
        { day: 'Fri', sent: 5, responses: 1 }
      ]
    };
  }
};
