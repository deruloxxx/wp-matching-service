import { OrderUsecase } from '../usecases/order.usecase';
import { Controller, Get } from '@nestjs/common';
import { Order } from '../models/order/order';
import { UserId } from '../models/user/user';
import { OrderRepository } from '../models/order/orderRepository';
import { LoggingUser } from './decorators/loginUser/loggingUser';
import { LoginUser } from './decorators/loginUser/loginUser';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly orderUsecase: OrderUsecase,
  ) {}

  @Get('/')
  async getAllOrders(@LoginUser() loginUser: LoggingUser): Promise<Order[]> {
    return this.orderRepository.allOrdersOfParty(new UserId(loginUser.userId));
  }
}
