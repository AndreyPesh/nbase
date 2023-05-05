import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CarsService } from './cars/service/cars.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly carsService: CarsService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('c') 
  
  getCars() {
    return this.carsService.findAll()
  }
}
