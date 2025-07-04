export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
  isUserAdmin,
  isUserManager,
  getUserRoles,
  useUserRole,
} from './model/selectors/roleSelectors';
export {
  userActions,
  userReducer,
  useUserActions,
} from './model/slice/userSlice';
export { UserRole } from './model/consts/userConsts';
export type { UserSchema, User } from './model/types/user';

export { useJsonSettings } from './model/selectors/jsonSettings';

export { saveJsonSettings } from './model/services/saveJsonSettings';

export { initAuthData } from './model/services/initAuthData';
