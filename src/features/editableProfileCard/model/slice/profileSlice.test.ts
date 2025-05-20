import { Country } from 'entites/Country';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from 'entites/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { ValidateProfileError } from '../consts/consts';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'asd asddas',
  first: 'asd',
  city: 'asf',
  currency: Currency.RUB,
};

describe('profileSlice.test', () => {
  test('test update first', () => {
    const state: DeepPartial<ProfileSchema> = { form: { first: '123' } };
    expect(
      profileReducer(state as ProfileSchema, profileActions.updateProfile({ first: '321' }))
    ).toEqual({
      form: {
        first: '321',
      },
    });
  });

  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { lastname: '123' },
      data: data,
    };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      form: data,
      data: data,
      readonly: true,
      validateErrors: undefined,
    });
  });

  test('test setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({
      readonly: false,
    });
  });

  test('test update service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending(''))).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      data,
      form: data,
    });
  });
});
