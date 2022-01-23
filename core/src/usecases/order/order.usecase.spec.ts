import { Order } from '../../models/order/order';
import { OrderUsecase } from './order.usecase';

describe('発注', () => {
  test('発注者が、コースとエンジニアを "選択している" という条件の時できる', () => {
    const orderUsecase = new OrderUsecase();
    expect(() => orderUsecase.requestOrder(new Order())).not.toThrowError();
  });

  test('発注者が、コースとエンジニアを "選択していない" という条件の時できない', () => {
    const orderUsecase = new OrderUsecase();
    expect(() => orderUsecase.requestOrder(new Order())).toThrowError();
  });
});
