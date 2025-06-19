import { configureStore, UnknownAction, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { CounterReducer } from '@/entites/Counter';
import { userReducer } from '@/entites/User';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';
// import { NavigateOptions, To } from 'react-router-dom';
import { Reducer } from 'redux';
import { scrollSaveReducer } from '@/features/ScrollSave';
import { rtkApi } from '@/shared/api/rtkApi';

export type RootState = ReducersMapObject<StateSchema>;

// export type AppThunkDispatch = ThunkDispatch<RootState, any, Action>;
// export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
  // navigate?: (to: To, options?: NavigateOptions)=> void,
  // navigate: (to: To, options?: NavigateOptions)=> void | Promise<void>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: CounterReducer,
    user: userReducer,
    scrollSave: scrollSaveReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
    // navigate
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema, UnknownAction>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  });
  // @ts-ignore
  store.reducerManager = reducerManager;

  // store.

  return store;
}
