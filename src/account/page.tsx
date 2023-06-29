'use client';
import { Profile } from '@prisma/client';
import axios from 'axios';
import { useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Profile() {
  const [profile, setProfile] = useState<Profile>();

  const addProfile = async () => {
    const response = await axios.post<Profile>('/api/profile', {
      headers: { 'Content-type': 'application/json' },
    });
    if (response) {
      console.log('set profile', response);

      setProfile(() => response.data);
    }
  };

  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
      <button onClick={() => addProfile()} className="border-black">
        Add profile
      </button>
      <h1>User image: {profile && profile.image}</h1>
    </main>
  );
}
