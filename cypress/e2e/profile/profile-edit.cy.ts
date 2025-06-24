let profileId: string;

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login('testUser', '123').then(data => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('Успешная загрузка профиля', () => {
    cy.getByTestId('ProfileCard.firstName').should('have.value', 'Тест Имя');
  });
  it('Редактирует профиль', () => {
    const newName = 'new';
    const lastName = 'lastName';
    cy.updateProfile(newName, lastName);
    cy.getByTestId('ProfileCard.firstName').should('have.value', newName);
    cy.getByTestId('ProfileCard.lastName').should('have.value', lastName);
  });
});
