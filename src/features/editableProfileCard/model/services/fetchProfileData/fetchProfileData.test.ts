import { Country } from 'entites/Country';
import { fetchProfileData } from './fetchProfileData';
import { userActions } from 'entites/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entites/Currency';

// jest.mock('axios');

// const mockedAxios = jest.mocked(axios);
const data = {
  id: '1',
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'asd asddas',
  first: 'asd',
  city: 'asf',
  currency: Currency.RUB,
};


describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data)
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');

  });
});
