import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
  const state: Partial<StateSchema> = {
    counter: { value: 10 },
  };

  test('', () => {
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
