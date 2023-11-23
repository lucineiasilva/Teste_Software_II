/// <reference types="cypress"/>
describe('Login', () => {
  it('Deve retornar mensagem de erro devido usuário inválido  - cenário de insucesso', () => {
    cy.visit('https://front-cras.app.fslab.dev/')
    cy.get('#email').type('dev@gmail.com');
    cy.get('#senha').type('12348');
    cy.get('.styles_button__dr0t2').click();
    cy.wait(5000)
  })
  it('Deve realizar o login com sucesso- cenário de  sucesso', () => {
    cy.login();

  })
})