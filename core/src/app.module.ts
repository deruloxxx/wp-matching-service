import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderController } from './controllers/order.controller';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [AppService],
})
export class AppModule {}
