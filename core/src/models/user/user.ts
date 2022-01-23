import { UserId } from './userId';

export class User {
  constructor(private readonly id: UserId, name: string, age: number) {

  }

  isSame(user: User) {
    return this.id.isSame(user.id);
  }
}
