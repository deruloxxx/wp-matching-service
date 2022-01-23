import { Notification } from '../../models/notification/notification';

export class NotificationUsecase {
  receive(notification: Notification) {}
  approve(notification: Notification) {}
  deny(notification: Notification) {}
}
