import { getServerSession } from 'next-auth';
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from '../components/buttons';
import { authOptions } from '@/lib/auth';
import { User } from '@/components/user';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main className="flex justify-center items-center h-[70vh]">
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />

        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>

        <User />
      </div>
    </main>
  );
}
