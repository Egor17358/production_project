// import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
// import { initArticlesPage } from './initArticlesPage';
// import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

// const mockedAxios = jest.mocked(axios);

describe('initArticlesPage.test', () => {
  test('success', async () => {
    // const thunk = new TestAsyncThunk(initArticlesPage, {
    //   // sort=createdAt&order=asc&search=&type=ALL
    //   articlesPage: {
    //     page: 1,
    //     ids: [],
    //     entities: {},
    //     limit: 5,
    //     isLoading: false,
    //     hasMore: true,
    //     _inited: false,
    //   },
    // });
    // await thunk.callThunk();
    // expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    // expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
  });

  test('fetchArticlesList not called', async () => {
    // const thunk = new TestAsyncThunk(initArticlesPage, {
    //     articlesPage: {
    //       page: 1,
    //       ids: [],
    //       entities: {},
    //       limit: 5,
    //       isLoading: false,
    //       hasMore: true,
    //       _inited: true,
    //     },
    //   });
    //   await thunk.callThunk();
    //   expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    //   expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
