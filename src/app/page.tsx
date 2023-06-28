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

const getUser = async () => {
  return await prisma.user.findMany()
  
} 

export default async function Home() {
  const users = await getUser()
  console.log(users);
  

  return (
    <main className="flex justify-center items-center h-[70vh]">
      <div>
        {/* <button onClick={getUser}>Send request</button> */}
      </div>
    </main>
  );
}
