import { Global, Module } from '@nestjs/common';
import { CarsController } from './controllers/cars.controller';
import { CarsService } from './service/cars.service';
import { Car } from './service/interface';

const mockCarService = {
  _cars: [] as Car[],
  get cars() {
    return this._cars;
  },

  create(car: Car) {
    this.cars.push(car);
  },

  findAll(): Car[] {
    return this.cars;
  },
};

// @Global()
@Module({
  controllers: [CarsController],
  providers: [CarsService],
  // providers: [{ useValue: mockCarService, provide: CarsService }],
  exports: [CarsService],
})
export class CarsModule {
  constructor() {}
}
