import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
  () =>
    new Promise(resolve => {
      // @ts-expect-error: Unreachable code error
      setTimeout(() => resolve(import('./ArticleEditPage')), 400);
    })
);
