/// <reference types="cypress"/>

const { loginPage, dashboardPage } = require('../support/pages/index.js')
const data = require('../fixtures/data.json')

describe('Access Admin Panel', () => {
    beforeEach(() => {
        cy.login(data.user, data.pass)
        //cy.visit('/wp-admin')
    })
    it('Should login with valid credentials', () => {
        //loginPage.login(data.user, data.pass)
        dashboardPage.siteName.should('be.visible')
    });
});