/* eslint-disable @typescript-eslint/no-namespace */

import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'Test Name',
  subtitle: 'Что нового в Python за 2037 год?',
  img: 'https://i.pinimg.com/736x/69/bf/8b/69bf8b69d44711f31b780b830fe537a3.jpg',
  views: 1022,
  createdAt: '26.02.2027',
  userId: '1',
  type: ['IT'],
  blocks: [],
};
export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/articles`,
      headers: { Authorization: 'ddd' },
      body: article ?? defaultArticle,
    })
    .then(resp => resp.body);
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'ddd' },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
