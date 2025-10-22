import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../lib/generated/prisma-client';

const prisma = new PrismaClient();

export async function getUsers() {
  // create seed users but don't fail on duplicates
  await prisma.user.createMany({
    data: [
      { email: 'alice@example.com', name: 'Alice' },
      { email: 'bob@example.com', name: 'Bob' },
      { email: 'charlie@example.com', name: 'Charlie' },
      { email: 'diana@example.com', name: 'Diana' },
      { email: 'edward@example.com', name: 'Edward' },
    ],
    skipDuplicates: true,
  });

  // return current users
  return prisma.user.findMany();
}

export async function GET() {
  try {
    const users = await getUsers();
    return NextResponse.json(users);
  } catch (err) {
    console.error('API /api error:', err);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 },
    );
  }
}
