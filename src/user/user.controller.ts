import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { GetCookie } from 'src/utils/decorators/cookies.decorator';

@Controller('user')
export class UserController {
  constructor(private userService: UserService){}
  @Get()
  getUser(@GetCookie('name') name: string) {
    console.log(name);
    return `user`;
  }
}
