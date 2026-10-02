import { AuthUser, AuthIdentity, AuthProviderType } from '@/types/auth';

export interface UserRecord {
  id: string;
  name: string;
  email: string; // Normalized lowercase
  passwordHash?: string;
  avatarUrl?: string;
  emailVerified: boolean;
  roleTitle?: string;
  status: 'active' | 'disabled';
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

export interface AuthIdentityRecord {
  id: string;
  userId: string;
  provider: AuthProviderType;
  providerUserId: string;
  providerEmail: string;
  createdAt: string;
}

// Simple fast password hashing for client/server demo consistency
export function hashPassword(password: string): string {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return `hash_${Math.abs(hash)}_${password.length}_sec`;
}

export function verifyPassword(password: string, passwordHash?: string): boolean {
  if (!passwordHash) return false;
  return hashPassword(password) === passwordHash;
}

// Initial Database Seed Data
const initialUsers: UserRecord[] = [
  {
    id: 'user_sanjeev_101',
    name: 'Sanjeev Kushwah',
    email: 'sanjeev@example.com',
    passwordHash: hashPassword('Password123'),
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    emailVerified: true,
    roleTitle: 'Customer Support & Operations Specialist',
    status: 'active',
    createdAt: '2026-09-01T10:00:00Z',
    updatedAt: '2026-09-01T10:00:00Z',
    lastLoginAt: '2026-10-02T10:00:00Z'
  },
  {
    id: 'user_google_102',
    name: 'Sanjeev Google',
    email: 'sanjeev@gmail.com',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    emailVerified: true,
    roleTitle: 'Growth & Outreach Manager',
    status: 'active',
    createdAt: '2026-09-15T10:00:00Z',
    updatedAt: '2026-09-15T10:00:00Z',
    lastLoginAt: '2026-10-01T10:00:00Z'
  }
];

const initialIdentities: AuthIdentityRecord[] = [
  {
    id: 'ident_google_102',
    userId: 'user_google_102',
    provider: 'google',
    providerUserId: 'google_uid_1092837469283746',
    providerEmail: 'sanjeev@gmail.com',
    createdAt: '2026-09-15T10:00:00Z'
  }
];

const DB_USERS_KEY = 'mailvora_db_users';
const DB_IDENTITIES_KEY = 'mailvora_db_identities';

function getStoredUsers(): UserRecord[] {
  if (typeof window === 'undefined') return initialUsers;
  try {
    const raw = localStorage.getItem(DB_USERS_KEY);
    if (!raw) {
      localStorage.setItem(DB_USERS_KEY, JSON.stringify(initialUsers));
      return initialUsers;
    }
    return JSON.parse(raw);
  } catch {
    return initialUsers;
  }
}

function saveUsers(users: UserRecord[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(DB_USERS_KEY, JSON.stringify(users));
  }
}

function getStoredIdentities(): AuthIdentityRecord[] {
  if (typeof window === 'undefined') return initialIdentities;
  try {
    const raw = localStorage.getItem(DB_IDENTITIES_KEY);
    if (!raw) {
      localStorage.setItem(DB_IDENTITIES_KEY, JSON.stringify(initialIdentities));
      return initialIdentities;
    }
    return JSON.parse(raw);
  } catch {
    return initialIdentities;
  }
}

function saveIdentities(identities: AuthIdentityRecord[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(DB_IDENTITIES_KEY, JSON.stringify(identities));
  }
}

// Database Operations
export const db = {
  findUserByEmail: (email: string): UserRecord | undefined => {
    const normalized = email.trim().toLowerCase();
    const users = getStoredUsers();
    return users.find((u) => u.email.trim().toLowerCase() === normalized);
  },

  findUserById: (id: string): UserRecord | undefined => {
    const users = getStoredUsers();
    return users.find((u) => u.id === id);
  },

  createUser: (user: Partial<UserRecord> & { name: string; email: string }): UserRecord => {
    const normalizedEmail = user.email.trim().toLowerCase();
    const users = getStoredUsers();
    
    if (users.some((u) => u.email.trim().toLowerCase() === normalizedEmail)) {
      throw new Error('UNIQUE constraint failed: users.email');
    }

    const newUser: UserRecord = {
      id: `user_${Date.now()}`,
      name: user.name.trim(),
      email: normalizedEmail,
      passwordHash: user.passwordHash,
      avatarUrl: user.avatarUrl,
      emailVerified: user.emailVerified ?? false,
      roleTitle: user.roleTitle || 'Job Applicant',
      status: 'active',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);
    return newUser;
  },

  updateUserLastLogin: (id: string): void => {
    const users = getStoredUsers();
    const idx = users.findIndex((u) => u.id === id);
    if (idx !== -1) {
      users[idx].lastLoginAt = new Date().toISOString();
      saveUsers(users);
    }
  },

  findAuthIdentity: (provider: AuthProviderType, providerUserId: string): AuthIdentityRecord | undefined => {
    const identities = getStoredIdentities();
    return identities.find((i) => i.provider === provider && i.providerUserId === providerUserId);
  },

  findAuthIdentitiesByUserId: (userId: string): AuthIdentityRecord[] => {
    const identities = getStoredIdentities();
    return identities.filter((i) => i.userId === userId);
  },

  createAuthIdentity: (identity: Omit<AuthIdentityRecord, 'id' | 'createdAt'>): AuthIdentityRecord => {
    const identities = getStoredIdentities();
    const newIdentity: AuthIdentityRecord = {
      ...identity,
      id: `ident_${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    identities.push(newIdentity);
    saveIdentities(identities);
    return newIdentity;
  }
};
