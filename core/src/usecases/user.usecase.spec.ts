import { UserUsecase } from './user.usecase';
import { User } from '../models/user/user';

describe('ユーザー登録', () => {
  test('訪問者が、新規ユーザー登録を zzz という条件の時できる', () => {
    const userUsecase = new UserUsecase();
    expect(() => userUsecase.registerUser(new User())).not.toThrowError();
  });

  test('訪問者が、新規ユーザー登録を xxx という条件の時できない', () => {
    const userUsecase = new UserUsecase();
    expect(() => userUsecase.registerUser(new User())).toThrowError();
  });

  test('訪問者が、新規ユーザー登録を yyy という条件の時できない', () => {
    const userUsecase = new UserUsecase();
    expect(() => userUsecase.registerUser(new User())).toThrowError();
  });
});