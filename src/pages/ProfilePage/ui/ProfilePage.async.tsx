import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  () =>
    new Promise(resolve => {
      // @ts-expect-error: Unreachable code error
      setTimeout(() => resolve(import('./ProfilePage')), 1500);
    })
);
