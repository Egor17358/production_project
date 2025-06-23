import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Routing', () => {
  describe('Пользователь Не авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.get('[data-testid=MainPage]').should('exist');
    });
    it('Переход открывает страницу пользователя', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Переход открывает несуществующий маршрут', () => {
      cy.visit('/profileeees');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login('testUser', '123');
    });

    it('Переход открывает страницу пользователя', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('Переход на страницу со списком статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
