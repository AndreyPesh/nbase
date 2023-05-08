import { Injectable } from '@nestjs/common';

export type User = { id: number; username: string; password: string };

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'Gir',
      password: 'qwerty',
    },
    {
      id: 2,
      username: 'Mos',
      password: 'ytrewq',
    },
  ];

  async findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
