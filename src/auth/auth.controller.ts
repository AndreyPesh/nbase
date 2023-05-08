import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './utils/guards/auth.guard';
import { User } from 'src/utils/decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signDto: Record<string, string>) {
    return this.authService.signIn(signDto.username, signDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@User() user: {username: string}) {
    return user;
  }
}
