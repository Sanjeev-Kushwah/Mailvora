import { NextRequest, NextResponse } from 'next/server';
import { db, verifyPassword } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, code: 'INVALID_CREDENTIALS', message: 'Email address is required.' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // 1. Database check for user
    const record = db.findUserByEmail(normalizedEmail);
    if (!record) {
      return NextResponse.json(
        {
          success: false,
          code: 'USER_NOT_FOUND',
          message: 'No Mailvora account was found with this email.'
        },
        { status: 404 }
      );
    }

    // 2. Verify password hash
    if (password) {
      const isMatch = verifyPassword(password, record.passwordHash);
      if (!isMatch) {
        return NextResponse.json(
          {
            success: false,
            code: 'INVALID_CREDENTIALS',
            message: 'Invalid email or password.'
          },
          { status: 401 }
        );
      }
    }

    db.updateUserLastLogin(record.id);

    const user = {
      id: record.id,
      name: record.name,
      email: record.email,
      avatarUrl: record.avatarUrl,
      emailVerified: record.emailVerified,
      roleTitle: record.roleTitle
    };

    const response = NextResponse.json({
      success: true,
      user
    });

    // Set secure HttpOnly session cookie
    response.cookies.set('mailvora_session', record.id, {
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
