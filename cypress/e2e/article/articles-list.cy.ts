describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login('testUser', '123').then((data) => {
      cy.visit('articles');
    });
  });
  it('Статьи успешно подгружаются', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
  it('С помощью fixtures', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
  it.skip('Пример skip test', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    cy.getByTestId('asaass').should('exist');
  });
});
