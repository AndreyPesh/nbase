import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  // const { id } = req.body
  const { data } = await req.json();
  console.log(data);
  // const user = await prisma.user.delete({where: {id: data.id}})

  // return NextResponse.json(user)
  return NextResponse.json(data.id);
};
