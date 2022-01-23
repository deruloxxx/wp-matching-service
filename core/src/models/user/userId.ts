export class UserId {
  constructor(private readonly id: string) {}

  isSame(id: UserId) {
    return id.id === this.id;
  }
}
