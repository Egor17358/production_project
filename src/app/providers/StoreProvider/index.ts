import { createReduxStore } from './config/store';
import type { AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type {
  StateSchema,
  ThunkConfig,
  StateSchemaKey,
  ReduxStoreWithManager,
} from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  StateSchemaKey,
  AppDispatch,
  ThunkConfig,
};
