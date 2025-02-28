import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';
import { DeepPartial } from 'app/providers/StoreProvider/config/store';

describe('getLoginUsername.test', () => {
  test('should return user', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('user');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
