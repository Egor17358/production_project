import { StateSchema } from '@/app/providers/StoreProvider';
import { getAddCommentFormText, getAddCommentFormError } from './addCommentFormSelectors';

describe('addCommentFormSelectors.test', () => {
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'textTest',
      },
    };
    expect(getAddCommentFormText(state as StateSchema)).toEqual('textTest');
  });

  test('should work with empty state data', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormText(state as StateSchema)).toEqual('');
  });

  test('should return Error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'true',
      },
    };
    expect(getAddCommentFormError(state as StateSchema)).toEqual('true');
  });

  test('should work with empty state Error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
  });
});
