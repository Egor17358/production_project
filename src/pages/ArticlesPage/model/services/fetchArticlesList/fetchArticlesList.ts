import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entites/Article';

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'acrticlesPage/fetchArticlesList',
  async (articeId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Article[]>(`/articles`, {
        params: {
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
  }
);
