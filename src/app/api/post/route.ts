import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

const handler = async () => {
  const post = await prisma.post.create({
    data: {
      title: `Post ${Math.random() * Math.random()}`,
      content: 'New post',
      author: {
        connect: {
          id: 2,
        },
      },
    },
  });
  return NextResponse.json(post);
};

const getPosts = async (req: NextRequest) => {
  const page = req.nextUrl.searchParams.get('page');
  const take = 3;

  const aggregations = await prisma.post.aggregate({
    _count: { authorId: true },
    _avg: {
      id: true,
    },
  });

  const countPost = await prisma.post.count()


  const tr = await prisma.$transaction([
    prisma.post.create({data: {title: 'Created 1', content: 'Created with transaction'}}),
    prisma.post.create({data: {title: 'Created 2', content: 'Created with transaction'}}),
    prisma.post.count()
  ])
  

  const posts = await prisma.post.findMany({
    skip: Number(page) * take,
    take,
    where: {
      published: true,
    },
  });
  return NextResponse.json(posts);
};

export { handler as POST, getPosts as GET };
