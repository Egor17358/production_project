import { ReactNode } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

export interface StoreProviderProps {
  children?: ReactNode;
  initialState?: Partial<StateSchema>;
}

// const store = createReduxStore({} as StateSchema);
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();


export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
