export class Form {
  public userName: string;
  public age: number;

  constructor(param: { user_name: string; age: number }) {
    if (typeof param.user_name !== 'string' || typeof param.age !== 'number')
      throw new Error('invalid parameter types');
    this.userName = param.user_name;
    this.age = param.age;
  }
}
