/// <reference types="cypress"/>

const { dashboardPage } = require('../support/pages/index.js')
const data = require('../fixtures/data.json');

context('Dado que estou na página inicial', ()=> {
    context('Quando eu faço login', ()=> {
        beforeEach(() => {
           cy.login(data.user, data.pass) 
        }); 

        it('Então o painel de admin deve ser exibido', () => {
            dashboardPage.siteName.should('be.visible')
        });
    })
})
