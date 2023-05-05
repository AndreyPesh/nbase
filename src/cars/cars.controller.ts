import {
  Controller,
  Get,
  Header,
  HttpCode,
  Post, 
  Body
} from '@nestjs/common';
import { CreateCarDto } from './car.dto';

@Controller({host: 'localhost', path: 'cars'})
export class CarsController {
  @Get()
  @HttpCode(300)
  @Header('Content-type', 'application/json')
  findAll() {
    return '';
  }

  @Get('audi')
  redirect(): Promise<string> {
    return new Promise((res) => {
      setTimeout(() => res('promise resolved'), 3000)
    });
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    console.log(createCarDto);
    return createCarDto;
  }
}

