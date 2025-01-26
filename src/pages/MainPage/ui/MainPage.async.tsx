import { lazy } from 'react';

// export const MainPageAsync = lazy(() => import('./MainPage'));
export const MainPageAsync = lazy(
  () =>
    new Promise(resolve => {
      // @ts-expect-error: Unreachable code error
      setTimeout(() => resolve(import('./MainPage')), 1500);
    })
);
