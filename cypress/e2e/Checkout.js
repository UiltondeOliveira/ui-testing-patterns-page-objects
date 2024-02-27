/// <reference types="cypress"/>

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
const { checkoutPage } = require('../support/pages/index.js')
const data = require('../fixtures/data.json')
const userData = require('../fixtures/userData.json')

Given('I visit EBAC Store products page', () => {
    cy.visit('/produtos')
})

When("I add the product to the cart and i fill the step Checkout", () => {
    cy.addToCart()
    cy.checkout()

    checkoutPage.fillBillingDetails(
        userData.firstName,
        userData.lastName,
        userData.country,
        userData.address,
        userData.city,
        userData.state,
        userData.postcode,
        userData.phone,
        userData.email
        )
})

Then('The purchase confirmation screen should be displayed', () => {
    cy.checkoutOrderRecived('Pedido recebido')
})

