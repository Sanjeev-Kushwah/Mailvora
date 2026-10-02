import { AuthUser, LoginCredentials, SignupCredentials, ForgotPasswordPayload, ResetPasswordPayload } from '@/types/auth';
import { db, hashPassword, verifyPassword, UserRecord } from '@/lib/db';

const AUTH_SESSION_KEY = 'mailvora_active_session';

export interface AuthResponse<T = any> {
  success: boolean;
  code?: 
    | 'USER_NOT_FOUND' 
    | 'INVALID_CREDENTIALS' 
    | 'EMAIL_ALREADY_EXISTS' 
    | 'EMAIL_NOT_VERIFIED' 
    | 'ACCOUNT_LINKING_REQUIRED' 
    | 'GOOGLE_AUTH_FAILED';
  message?: string;
  user?: AuthUser;
  newUser?: boolean;
  requiresOnboarding?: boolean;
  requiresVerification?: boolean;
  existingAccountEmail?: string;
  data?: T;
}

function mapUserRecordToAuthUser(record: UserRecord): AuthUser {
  const identities = db.findAuthIdentitiesByUserId(record.id);
  const hasGoogle = identities.some((i) => i.provider === 'google');

  return {
    id: record.id,
    name: record.name,
    email: record.email,
    avatarUrl: record.avatarUrl,
    emailVerified: record.emailVerified,
    roleTitle: record.roleTitle,
    authProvider: hasGoogle ? 'google' : 'email',
    createdAt: record.createdAt,
    lastLoginAt: record.lastLoginAt
  };
}

export const authService = {
  // GET /api/auth/me
  getCurrentUser: async (): Promise<AuthUser | null> => {
    try {
      if (typeof window === 'undefined') return null;
      const raw = localStorage.getItem(AUTH_SESSION_KEY);
      if (!raw) return null;
      const user = JSON.parse(raw) as AuthUser;
      const record = db.findUserById(user.id);
      if (!record || record.status === 'disabled') {
        localStorage.removeItem(AUTH_SESSION_KEY);
        return null;
      }
      return mapUserRecordToAuthUser(record);
    } catch {
      return null;
    }
  },

  // POST /api/auth/login — Real Database Check
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    await new Promise((res) => setTimeout(res, 600));

    const email = credentials.email.trim().toLowerCase();

    // 1. Query database for user by normalized email
    const record = db.findUserByEmail(email);

    // 2. User does not exist in database
    if (!record) {
      return {
        success: false,
        code: 'USER_NOT_FOUND',
        message: 'No Mailvora account was found with this email.'
      };
    }

    // 3. Password verification
    if (credentials.password) {
      const isValid = verifyPassword(credentials.password, record.passwordHash);
      if (!isValid) {
        return {
          success: false,
          code: 'INVALID_CREDENTIALS',
          message: 'Invalid email or password.'
        };
      }
    }

    // 4. Update last login timestamp
    db.updateUserLastLogin(record.id);
    const authUser = mapUserRecordToAuthUser(record);

    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(authUser));
    }

    return {
      success: true,
      user: authUser
    };
  },

  // POST /api/auth/register — Real Database Registration
  register: async (credentials: SignupCredentials): Promise<AuthResponse> => {
    await new Promise((res) => setTimeout(res, 700));

    const email = credentials.email.trim().toLowerCase();

    // Check if email already exists in DB
    const existing = db.findUserByEmail(email);
    if (existing) {
      return {
        success: false,
        code: 'EMAIL_ALREADY_EXISTS',
        message: 'An account already exists with this email address. Please log in instead.'
      };
    }

    // Hash password & create user in DB
    const createdRecord = db.createUser({
      name: credentials.name,
      email: email,
      passwordHash: credentials.password ? hashPassword(credentials.password) : undefined,
      emailVerified: false,
      roleTitle: 'Job Applicant'
    });

    const authUser = mapUserRecordToAuthUser(createdRecord);

    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(authUser));
    }

    return {
      success: true,
      user: authUser,
      requiresVerification: true
    };
  },

  // Google Authentication — Real DB & Account Selection Flow
  loginWithGoogleAccount: async (googleAccount: {
    email: string;
    name: string;
    avatarUrl?: string;
    googleUserId: string;
  }): Promise<AuthResponse> => {
    await new Promise((res) => setTimeout(res, 800));

    const normalizedEmail = googleAccount.email.trim().toLowerCase();

    // 1. Check if auth identity exists for google + googleUserId
    const identity = db.findAuthIdentity('google', googleAccount.googleUserId);
    if (identity) {
      const record = db.findUserById(identity.userId);
      if (record) {
        db.updateUserLastLogin(record.id);
        const user = mapUserRecordToAuthUser(record);
        if (typeof window !== 'undefined') {
          localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(user));
        }
        return { success: true, user, newUser: false };
      }
    }

    // 2. Check if user already exists in DB with same email
    const existingUser = db.findUserByEmail(normalizedEmail);
    if (existingUser) {
      // Account linking required confirmation
      return {
        success: false,
        code: 'ACCOUNT_LINKING_REQUIRED',
        message: 'An account already exists with this email. Would you like to connect your Google account?',
        existingAccountEmail: existingUser.email,
        data: {
          googleUserId: googleAccount.googleUserId,
          userId: existingUser.id
        }
      };
    }

    // 3. New User — Create user in DB and store Google auth identity
    const newRecord = db.createUser({
      name: googleAccount.name,
      email: normalizedEmail,
      avatarUrl: googleAccount.avatarUrl,
      emailVerified: true,
      roleTitle: 'Job Outreach Applicant'
    });

    db.createAuthIdentity({
      userId: newRecord.id,
      provider: 'google',
      providerUserId: googleAccount.googleUserId,
      providerEmail: normalizedEmail
    });

    const authUser = mapUserRecordToAuthUser(newRecord);

    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(authUser));
    }

    return {
      success: true,
      user: authUser,
      newUser: true,
      requiresOnboarding: true
    };
  },

  // POST /api/auth/link-google
  linkGoogleAccount: async (userId: string, googleUserId: string, googleEmail: string): Promise<AuthUser> => {
    await new Promise((res) => setTimeout(res, 500));

    const record = db.findUserById(userId);
    if (!record) {
      throw new Error('User not found for account linking.');
    }

    db.createAuthIdentity({
      userId: record.id,
      provider: 'google',
      providerUserId: googleUserId,
      providerEmail: googleEmail.trim().toLowerCase()
    });

    const user = mapUserRecordToAuthUser(record);
    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(user));
    }
    return user;
  },

  forgotPassword: async (payload: ForgotPasswordPayload): Promise<{ success: boolean; message: string }> => {
    await new Promise((res) => setTimeout(res, 600));
    return {
      success: true,
      message: 'If an account exists for this email, you will receive instructions to reset your password.'
    };
  },

  resetPassword: async (payload: ResetPasswordPayload): Promise<{ success: boolean }> => {
    await new Promise((res) => setTimeout(res, 700));
    if (!payload.token) {
      throw new Error('Password reset token is invalid or has expired.');
    }
    return { success: true };
  },

  verifyEmail: async (token: string): Promise<AuthUser> => {
    await new Promise((res) => setTimeout(res, 700));
    const current = await authService.getCurrentUser();
    if (!current) throw new Error('Invalid verification token.');
    return current;
  },

  resendVerification: async (email: string): Promise<boolean> => {
    await new Promise((res) => setTimeout(res, 500));
    return true;
  },

  logout: async (): Promise<void> => {
    await new Promise((res) => setTimeout(res, 300));
    if (typeof window !== 'undefined') {
      localStorage.removeItem(AUTH_SESSION_KEY);
    }
  }
};
