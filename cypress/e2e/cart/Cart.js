/// <reference types="cypress"/>

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
const { cartPage } = require('../../support/pages/index')

Given('I add product to a cart and visit cart page', () => {   
    cy.setCookie('ebacStoreVersion', 'v2')
    cy.visit('/produtos')
    cy.intercept('GET', 'public/getProducts?type=popular&limit=10&skip=0', { fixture: 'productsData.json' }).as('getProducts')
    cartPage.addProduct()
})

When("Cart page is displayed", () => {
    cartPage.getPageTitle('My Cart')
})

Then('The added product must be displayed', () => {
    cartPage.getProductName('Eos V-Neck Hoodie')
})

When('I edit a product in the cart', () => {
    cartPage.decreseProduct()
});

Then('The cart must be updated', () => {
    cartPage.getEmptyCartMessage('Your cart is empty')
})

When('I delete the product from the cart', () => {
    cartPage.deleteProduct()
});

Then('The cart must be empty', () => {
    cartPage.getEmptyCartMessage('Your cart is empty')
})

