import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileisLoading } from './getProfileisLoading';

describe('getProfileisLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileisLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileisLoading(state as StateSchema)).toEqual(undefined);
  });
});
