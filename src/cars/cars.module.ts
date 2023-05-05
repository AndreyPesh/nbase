import { Global, Module } from '@nestjs/common';
import { CarsController } from './controllers/cars.controller';
import { CarsService } from './service/cars.service';

// @Global()
@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService]
})
export class CarsModule {
  constructor() {}
}
