import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';
import { DeepPartial } from 'app/providers/StoreProvider/config/store';

describe('getLoginPassword.test', () => {
  test('should return 123', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
