import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CarsController } from './cars/controllers/cars.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [CarsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'cars/all', method: RequestMethod.GET })
      .forRoutes(CarsController);
  }
}
