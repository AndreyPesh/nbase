import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

const handler = async () => {
  const post = await prisma.post.create({
    data: {
      title: `Post ${Math.random() * Math.random()}`,
      content: 'New post',
      author: {
        connect: {
          id: 1
        }
      }
    },
  });
  return NextResponse.json(post);
};

export { handler as POST };
