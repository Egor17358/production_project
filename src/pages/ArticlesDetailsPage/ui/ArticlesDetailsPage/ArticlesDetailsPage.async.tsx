import { lazy } from 'react';

export const ArticlesDetailsPageAsync = lazy(
  () =>
    new Promise(resolve => {
      // @ts-expect-error: Unreachable code error
      setTimeout(() => resolve(import('./ArticlesDetailsPage')), 1500);
    })
);
