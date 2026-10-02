import { NextRequest, NextResponse } from 'next/server';
import { db, hashPassword } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, code: 'INVALID_INPUT', message: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existing = db.findUserByEmail(normalizedEmail);
    if (existing) {
      return NextResponse.json(
        {
          success: false,
          code: 'EMAIL_ALREADY_EXISTS',
          message: 'An account already exists with this email address.'
        },
        { status: 400 }
      );
    }

    const createdRecord = db.createUser({
      name: name.trim(),
      email: normalizedEmail,
      passwordHash: password ? hashPassword(password) : undefined,
      emailVerified: false,
      roleTitle: 'Job Applicant'
    });

    const user = {
      id: createdRecord.id,
      name: createdRecord.name,
      email: createdRecord.email,
      avatarUrl: createdRecord.avatarUrl,
      emailVerified: createdRecord.emailVerified
    };

    const response = NextResponse.json({
      success: true,
      user,
      requiresVerification: true
    });

    response.cookies.set('mailvora_session', createdRecord.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    });

    return response;
  } catch (err: any) {
    return NextResponse.json(
      { success: false, code: 'SERVER_ERROR', message: err.message || 'Internal server error.' },
      { status: 500 }
    );
  }
}
