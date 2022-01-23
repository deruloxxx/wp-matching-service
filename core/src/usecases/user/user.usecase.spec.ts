import { UserUsecase } from './user.usecase';
import { User } from '../../models/user/user';
import { UserId } from '../../models/user/userId';

describe('ユーザー登録', () => {
  test('訪問者は、ユーザー未登録の時、新規ユーザー登録できる', () => {
    const userUsecase = new UserUsecase();
    expect(() =>
      userUsecase.registerUser(
        new User(new UserId('unregistered'), 'User Name', 20),
      ),
    ).not.toThrowError();
  });

  test('訪問者は、ユーザー登録済の時、新規ユーザー登録できない', () => {
    const userUsecase = new UserUsecase();
    expect(() =>
      userUsecase.registerUser(new User(new UserId('id1'), 'User Name', 20)),
    ).toThrowError();
  });
});
