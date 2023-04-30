/// <reference types="cypress"/>
context('funcionalidae login', () => {
    afterEach(() => {
        cy.screenshot
    });
    
});
    it ('deve fazer login com sucesso', () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('fabiovideomaker@hotmail.com')
        cy.get('#password').type ('330919')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , 'Olá, fabiovideomaker')
        
    })

    it('Deve inserir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('ebacteste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should ('contain' , 'não está cadastrado neste site')
        
        
    })
    it('Deve inserir uma mensagem de erro ao inserir senha invalida', () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('aluno_ebac@teste.com')
        cy.get('#password').type ('testeteste.com')
        cy.get('.woocommerce-form > .button').click ()
        cy.get('.woocommerce-error > li').should ('contain' , 'Erro: a senha fornecida ')

    
 })


