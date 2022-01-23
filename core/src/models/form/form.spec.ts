import { Form } from './form';

describe('Form', () => {
  test('新規ユーザー登録フォームの必須項目を全て記入しているならば、初期化できる', () => {
    expect(
      () => new Form({ user_name: 'User Name', age: 20 }),
    ).not.toThrowError();
  });

  test('新規ユーザー登録フォームの必須項目を全て記入していないならば、初期化できない', () => {
    expect(() => new Form({ user_name: null as any, age: 20 })).toThrowError();
  });
});
