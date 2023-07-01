'use client';
import { User } from '@prisma/client';
import axios from 'axios';
import React from 'react';

const ListUsers = ({ users }: { users: User[] }) => {
  const deleteUser = async (id: number) => {
    return await axios.post('/api/user', { data: { id }, headers: {'Content-Type': 'application/json'} });
  };

  return (
    <div>
      {users &&
        users.map((user) => (
          <h1 key={user.id} onClick={() => deleteUser(user.id)}>
            {user.name}
          </h1>
        ))}
    </div>
  );
};

export default ListUsers;
