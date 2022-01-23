import { Order } from './order';
import { UserId } from '../user/userId';

export interface OrderRepository {
  allOrdersOfParty(userId: UserId): Promise<Order[]>;

  save(order: Order): void;
}
