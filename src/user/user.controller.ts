import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService){}
  @Get()
  getUser() {
    const user = this.userService.getUser()
    return `user ${user}`;
  }
}
