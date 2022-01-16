import { OrderUsecase } from '../usecases/order.usecase';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Order } from '../models/order/order';
import { OrderRepository } from '../models/order/orderRepository';
import { LoggingUser } from './decorators/loginUser/loggingUser';
import { LoginUser } from './decorators/loginUser/loginUser';
import { RequestOrderDto } from './dto/requestOrderDto';
import { RequestOrderCommand } from '../usecases/requestOrderCommand';
import { UserId } from '../models/user/userId';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly orderUsecase: OrderUsecase,
  ) {}

  @Get('/')
  async getAllOrders(@LoginUser() loginUser: LoggingUser): Promise<Order[]> {
    return this.orderUsecase.ordersOfUserId(new UserId(loginUser.userId));
  }

  @Post('/')
  async requestOrder(
    @LoginUser() loginUser: LoggingUser,
    @Body() dto: RequestOrderDto,
  ): Promise<void> {
    this.orderUsecase.requestOrder(new RequestOrderCommand());
  }
}
