describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login('testUser', '123').then(data => {
      cy.visit('articles');
    });
  });
  it('Статьи успешно подгружаются', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
});
