import { Notification } from '../../models/notification/notification';
import { NotificationUsecase } from './notification.usecase';

describe('通知', () => {
  test('発注者が、"発注完了"した時、選択したエンジニアに通知が受信される', () => {
    const notificationUsecase = new NotificationUsecase();
    expect(() => {
      notificationUsecase.receive(new Notification());
    }).not.toThrowError();
  });

  test('エンジニアが、"通知を承諾"した時、発注者に通知が送信される', () => {
    const notificationUsecase = new NotificationUsecase();
    expect(() => {
      notificationUsecase.approve(new Notification());
    }).not.toThrowError();
  });

  test('エンジニアが、"通知を否認"した時、発注者に通知が送信される', () => {
    const notificationUsecase = new NotificationUsecase();
    expect(() => {
      notificationUsecase.deny(new Notification());
    }).not.toThrowError();
  });

  test('エンジニアが、"契約書を受信"した時、通知が受信される', () => {
    const notificationUsecase = new NotificationUsecase();
    expect(() => {
      notificationUsecase.receiveContract(new Notification());
    }).not.toThrowError();
  });

  test('発注者が、"発注完了"していない時、選択したエンジニアに送信されない', () => {
    const notificationUsecase = new NotificationUsecase();
    expect(() => {
      notificationUsecase.receive(new Notification());
    }).toThrowError();
  });

  test('エンジニアが、"通知を承諾"していない時、発注者に通知が送信されない', () => {
    const notificationUsecase = new NotificationUsecase();
    expect(() => {
      notificationUsecase.approve(new Notification());
    }).toThrowError();
  });

  test('エンジニアが、"通知を否認"していない時、発注者に通知が送信されない', () => {
    const notificationUsecase = new NotificationUsecase();
    expect(() => {
      notificationUsecase.deny(new Notification());
    }).toThrowError();
  });

  test('エンジニアが、"契約書を受信"していない時、通知が受信されない', () => {
    const notificationUsecase = new NotificationUsecase();
    expect(() => {
      notificationUsecase.receiveContract(new Notification());
    }).toThrowError();
  });
});
