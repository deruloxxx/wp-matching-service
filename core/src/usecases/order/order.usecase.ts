import { RequestOrderCommand } from '../requestOrderCommand';
import { OrderRepository } from '../../models/order/orderRepository';
import { Order } from '../../models/order/order';
import { UserId } from '../../models/user/userId';

export class OrderUsecase {
  constructor(private readonly orderRepository?: OrderRepository) {}

  requestOrder(cmd: RequestOrderCommand) {
    const order = new Order();

    this.orderRepository.save(order);
  }

  async ordersOfUserId(userId: UserId): Promise<Order[]> {
    return this.orderRepository.allOrdersOfParty(userId);
  }
}
