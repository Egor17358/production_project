import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { UserRole } from '../consts/userConsts';
import { buildSelector } from '@/shared/lib/store';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;
// console.log('s', getUserRoles());

export const isUserAdmin = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.ADMIN)),
);
export const [useUserRole, isUserAdmin1] = buildSelector((state) =>
  Boolean(state.user.authData?.roles),
);
// createSelector(getUserRoles, roles =>
// Boolean(roles?.includes(UserRole.ADMIN))
// );
export const isUserManager = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.MANAGER)),
);
