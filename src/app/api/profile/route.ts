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

export { handler as POST };
