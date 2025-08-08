import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { CommentType } from '@/entities/Comment';
import { ArticlesDetailsCommentsSchema } from '../types/ArticlesDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (comment: CommentType) => comment.id,
  // Keep the "all IDs" array sorted based on book titles
  // sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const selectArticleCommentsState = (state: StateSchema) =>
  state.articleDetailsPage?.comments;

const initialState =
  commentsAdapter.getInitialState<ArticlesDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  });

export const articleDetailsCommentsSelectors =
  commentsAdapter.getSelectors<StateSchema>(
    (state) => selectArticleCommentsState(state) || initialState,
  );

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<CommentType[]>) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, action.payload);
        },
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice;
