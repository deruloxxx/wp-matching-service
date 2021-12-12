export class Order {
  constructor() {
    Order.validateOrderCondition();
  }

  private static validateOrderCondition() {
    throw new Error('invalid order');
  }
}
