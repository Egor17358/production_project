import { AddCommentFormSchema } from '../type/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentForm';

describe('addCommentForm.test', () => {
  test('test text', () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: '123' };
    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormActions.setText('321'),
      ),
    ).toEqual({
      text: '321',
    });
  });
});
