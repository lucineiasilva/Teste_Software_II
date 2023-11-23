/// <reference types="cypress"/>
describe('usuario', () => {
    it('Deve realizar cadastro de um usuário com status ativo - cenário de sucesso', () => {
      cy.login();
      cy.get('.styles_buttonMenu__mmyUS > img').click();
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click();
      cy.get(':nth-child(5) > .styles_button__dr0t2').click();
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > .styles_containerButtonHidden__TaoLq > img').click();
      cy.get('#nomeCadastrar').type('Coisinha coisada');
      cy.get('#emailCadastrar').type('coisinha@gmail.com');
      cy.get('#senhaCadastrar').type('Co@12ifro');
      cy.get('#unidadeCadastrar').select('CRAS - Vilhena');
      cy.get('#grupoCadastrar').select('Padrão');
      cy.get('span.styles_slider__0TNp_').click();   
      cy.get('[type="submit"]').click();
      cy.wait(2000);
      
    })
    it('Deve retornar as mensagem de validação ao cadastrar usuário  - cenário de insucesso', () => {
      cy.login();
      cy.get('.styles_buttonMenu__mmyUS > img').click();
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click();
      cy.get(':nth-child(5) > .styles_button__dr0t2').click();
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > .styles_containerButtonHidden__TaoLq > img').click();
      cy.get('#nomeCadastrar').type('josevaldo');
      cy.get('#emailCadastrar').type('coisinha@gmail.com');
      cy.get('#senhaCadastrar').type('Co@12ifro');
      cy.get('#unidadeCadastrar').select('CRAS - Vilhena');
      cy.get('#grupoCadastrar').select('Padrão');
      cy.get('span.styles_slider__0TNp_').click();   
      cy.get('[type="submit"]').click();
      cy.contains('E-mail já cadastrado!')
      cy.wait(2000);
    })
  
    it('Deve retornar uma consulta do usurário cadastrado com status ativo - cenário de sucesso', () => {
      cy.login();
      cy.get('.styles_buttonMenu__mmyUS > img').click();
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click();
      cy.get('#email').type('coisinha@gmail.com')
      cy.get('span.styles_slider__0TNp_').click(); 
      cy.get(':nth-child(4) > .styles_button__dr0t2').click();  
      cy.wait(2000);

    })
  
    it('Deve atualizar os dados de um usuário - cenário de sucesso ', () => {
      cy.login();
      cy.get('.styles_buttonMenu__mmyUS > img').click();
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click();
      cy.get('#email').type('arturo.reis1886299860@gmail.com');
      cy.get('span.styles_slider__0TNp_').click();
      cy.get(':nth-child(4) > .styles_button__dr0t2').click();
      cy.get('[alt="Atualizar usuário"]').click();
      cy.get('#grupo').select('Padrão');
      cy.get('[type="submit"]').click();
      cy.contains('Usuário atualizado com sucesso');
      cy.wait(2000);
    })
  
    it('Deve visualizar as informações de um usuário - cenário de sucesso', () => {
      cy.login();
      cy.get('.styles_buttonMenu__mmyUS > img').click();
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"] > .styles_containerLinkText__Rz0Qr').click();
      cy.get('#email').type('arturo.reis1886299860@gmail.com');
      cy.wait(2000);
      cy.get(':nth-child(4) > .styles_button__dr0t2').click();
      cy.wait(200); 
      cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Informação do usuário"]').click();

    })
  })
  