import {
  createEntityAdapter,
  createSlice,
  configureStore,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CommentType } from 'entites/Comment';
import { ArticlesDetailsCommentsSchema } from '../types/ArticlesDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (comment: CommentType) => comment.id,
  // Keep the "all IDs" array sorted based on book titles
  // sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state: StateSchema) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticlesDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    // bookAdded: booksAdapter.addOne,
    // booksReceived(state, action) {
    //   // Or, call them as "mutating" helpers in a case reducer
    //   booksAdapter.setAll(state, action.payload.books)
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCommentsByArticleId.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<CommentType[]>) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;

// const store = configureStore({
//   reducer: {
//     books: articleDetailsCommentsSlice.reducer,
//   },
// });

// type RootState = ReturnType<typeof store.getState>

// console.log(store.getState().books)
// // { ids: [], entities: {} }

// // Can create a set of memoized selectors based on the location of this entity state
// const booksSelectors = booksAdapter.getSelectors<RootState>(
//   (state) => state.books,
// )

// // And then use the selectors to retrieve values
// const allBooks = booksSelectors.selectAll(store.getState())
