/// <reference types="cypress" />

export const profilePage = {
    get siteName () {
        return cy.get(`#wp-admin-bar-site-name > [aria-haspopup="true"]`)
    }
}

