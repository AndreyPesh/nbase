import { Controller, Get, Header, HttpCode, Post, Body } from '@nestjs/common';
import { CreateCarDto } from './car.dto';
import { CarsService } from '../service/cars.service';

@Controller({ host: 'localhost', path: 'cars' })
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Get('all')
  getCars() {
    return this.carsService.findAll();
  }
  @Post('car')
  addCar(@Body() car: CreateCarDto) {
    return this.carsService.create(car);
  }

  @Get()
  @HttpCode(300)
  @Header('Content-type', 'application/json')
  findAll() {
    return '';
  }

  @Get('audi')
  redirect(): Promise<string> {
    return new Promise((res) => {
      setTimeout(() => res('promise resolved'), 3000);
    });
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    console.log(createCarDto);
    return createCarDto;
  }
}
