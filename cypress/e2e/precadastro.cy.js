/// <reference types="cypress"/>
var faker = require ('faker')
describe('pré-cadastro', () => {

});
it('deve completarfazer cadastro com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#reg_email').type (faker.internet.email())
    cy.get('#reg_password').type('330919')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type (faker.name.firstName())
    cy.get('#account_last_name').type(faker.name.lastName())
    cy.get('.woocommerce-Button').click()

    cy.get('.woocommerce-message').should ('contain' ,'Detalhes da conta modificados com sucesso.')
    


})