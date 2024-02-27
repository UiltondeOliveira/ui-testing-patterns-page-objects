/// <reference types="cypress" />

export const myAccountPage = {
    get pageName () {
        return cy.get(`.page-title`)
    }
}

