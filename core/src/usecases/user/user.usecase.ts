import { User } from '../../models/user/user';
import { UserId } from '../../models/user/userId';

export class UserUsecase {
  registeredUsers = [
    new User(new UserId('id1'), 'User Name', 20),
    new User(new UserId('id2'), 'User Name', 20),
    new User(new UserId('id3'), 'User Name', 20),
  ];

  registerUser(user: User) {
    if (this.isRegistered(user)) {
      return;
    } else {
      throw new Error('User has been registered');
    }
  }

  private isRegistered(user: User) {
    return this.registeredUsers.every((u: User) => !u.isSame(user));
  }
}
