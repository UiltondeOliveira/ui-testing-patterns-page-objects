/// <reference types="cypress"/>

const { dashboardPage } = require('../support/pages/index.js')
const data = require('../fixtures/data.json')

describe('Access Admin Panel', () => {
    beforeEach(() => {
        cy.login(data.user, data.pass)
    })
    it('Should login with valid credentials', () => {
        dashboardPage.siteName.should('be.visible')
    });
});