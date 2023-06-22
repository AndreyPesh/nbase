import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from '../components/buttons';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-[70vh]">
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </div>
    </main>
  );
}
