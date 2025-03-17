import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ArticleSortField, ArticleType } from 'entites/Article';
import { SortOrder } from 'shared/types';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'acrticlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    const inited = getArticlesPageInited(getState());

    if (!inited) {
      const orderFormUrl = searchParams.get('order') as SortOrder;
      const sortFormUrl = searchParams.get('sort') as ArticleSortField;
      const searchFormUrl = searchParams.get('search');
      const typeFormUrl = searchParams.get('type') as ArticleType;

      if (orderFormUrl) {
        dispatch(articlesPageActions.setOrder(orderFormUrl));
      }
      if (sortFormUrl) {
        dispatch(articlesPageActions.setSort(sortFormUrl));
      }
      if (searchFormUrl) {
        dispatch(articlesPageActions.setSearch(searchFormUrl));
      }
      if (typeFormUrl) {
        dispatch(articlesPageActions.setType(typeFormUrl));
      }

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  }
);
