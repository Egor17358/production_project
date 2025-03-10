import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CommentType } from 'entites/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  CommentType[],
  string | undefined,
  ThunkConfig<string>
>('acrticleDetails/fetchCommentsByArticleId', async (articeId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!articeId) {
    return rejectWithValue('error');
  }

  try {
    const response = await extra.api.get<CommentType[]>(`/comments`, {
      params: {
        articeId,
        _expand: 'user',
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
