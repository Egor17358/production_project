import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
  () =>
    new Promise(resolve => {
      // @ts-expect-error: Unreachable code error
      setTimeout(() => resolve(import('./ArticlesPage')), 1500);
    })
);
