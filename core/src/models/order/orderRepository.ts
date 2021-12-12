import { UserId } from '../user/user';
import { Order } from './order';

export interface OrderRepository {
  allOrdersOfParty(userId: UserId): Promise<Order[]>;
}
