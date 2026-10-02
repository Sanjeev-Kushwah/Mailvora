import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: NextRequest) {
  const sessionId = req.cookies.get('mailvora_session')?.value;
  if (!sessionId) {
    return NextResponse.json({ success: false, user: null }, { status: 401 });
  }

  const record = db.findUserById(sessionId);
  if (!record || record.status === 'disabled') {
    return NextResponse.json({ success: false, user: null }, { status: 401 });
  }

  return NextResponse.json({
    success: true,
    user: {
      id: record.id,
      name: record.name,
      email: record.email,
      avatarUrl: record.avatarUrl,
      emailVerified: record.emailVerified,
      roleTitle: record.roleTitle
    }
  });
}
