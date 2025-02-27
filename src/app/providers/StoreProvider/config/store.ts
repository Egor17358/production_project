import {
  Action,
  configureStore,
  ReducersMapObject,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { CounterReducer } from 'entites/Counter';
import { userReducer } from 'entites/User';
import { loginReducer } from 'features/AuthByUsername';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

export type RootState = ReducersMapObject<StateSchema>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppThunkDispatch = ThunkDispatch<RootState, any, Action>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: CounterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
