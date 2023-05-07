import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(private configService: ConfigService) {}
  getUser() {
    return this.configService.get<number>('PORT');
  }
}
