import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

const handler = async (req: NextRequest) => {
  try {
    const profile = await prisma.profile.create({
      data: {
        image: 'default.svg',
        user: {
          connect: {
            id: 1,
          },
        },
      },
    });
    return NextResponse.json(profile);
  } catch (error) {
    console.log(error);

    return NextResponse.json(null);
  }
};

const getProfile = async () => {
  const profile = await prisma.profile.findUnique({
    where: {
      userId: 7,
    },
  });

  return NextResponse.json(profile);
};

const updateId = async () => {
  const id = await prisma.user.update({
    where: { id: 1 },
    data: { id: 7 },
  });
  return NextResponse.json(id);
};

export { handler as POST, getProfile as GET, updateId as PATCH };
