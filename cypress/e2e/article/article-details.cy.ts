let currentArticleId: string;

describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login('testUser', '123');
    cy.createArticle().then(article => {
      currentArticleId = article.id;
      cy.log('articleid', JSON.stringify(article));
      cy.visit(`articles/${article.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('Содержимое статьи', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });
  it('Статьи рекомендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });
  it('Оставляем комментарий', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });
  it('Ставим оценку', () => {
    const rate = 4;
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(rate, 'feedback');
    cy.get('[data-selected=true]').should('have.length', rate);
  });

  it('Ставим оценку (пример с fixtures)', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    const rate = 4;
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(rate, 'feedback');
    cy.get('[data-selected=true]').should('have.length', rate);
  });
});
