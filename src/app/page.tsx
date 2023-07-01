// 'use client'
import { getServerSession } from 'next-auth';
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from '../components/buttons';
import { User } from '@/components/user';
import { prisma } from '@/lib/prisma';
import Post from '@/components/post';
import Profile from '../account/page';
import ListUsers from '@/components/listUsers';

const getUser = async () => {
  return await prisma.user.findMany();
};

export default async function Home() {
  const users = await getUser();

  return (
    <main className="flex justify-center items-center h-[70vh]">
      <Post />
      <ListUsers users={users} />
      <Profile />
    </main>
  );
}
