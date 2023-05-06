import { Controller, Get, Header, HttpCode, Post, Body, UseGuards } from '@nestjs/common';
import { CreateCarDto } from './car.dto';
import { CarsService } from '../service/cars.service';
import { RolesGuard } from 'src/utils/guards/roles.guard';
import { Roles } from 'src/utils/decorators/roles.decorator';

@Controller({ host: 'localhost', path: 'cars' })
@UseGuards(RolesGuard)
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Get('all')
  async getCars() {
    return this.carsService.findAll();
  }
  @Post('car')
  @Roles('admin')
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
