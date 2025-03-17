import { FC, ReactNode, useEffect } from 'react';
// import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { useStore } from 'react-redux';
import {
  ReduxStoreWithManager,
  StateSchema,
  StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducerList = {
  // [name in StateSchemaKey]?: Reducer;
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

export interface DynamicModuleLoaderProps {
  children?: ReactNode;
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
  // className?: string
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = props => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();
    
    Object.entries(reducers).forEach(([name, reducer]) => {
      if (!mountedReducers[name as StateSchemaKey]) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
