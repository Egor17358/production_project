import { Country } from 'entites/Country';
import { validateProfileData } from './validateProfileData';
import { Currency } from 'entites/Currency';
import { ValidateProfileError } from '../../consts/consts';

// jest.mock('axios');

// const mockedAxios = jest.mocked(axios);
const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'asd asddas',
  first: 'asd',
  city: 'asf',
  currency: Currency.RUB,
};

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('without age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('without country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('without city', async () => {
    const result = validateProfileData({ ...data, city: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });

  test('without first and last name, age', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '', age: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('without data', async () => {
    const result = validateProfileData();

    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });
});
