/// <reference types="cypress"/>

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
const { myAccountPage } = require('../../support/pages/index.js')
import { faker } from '@faker-js/faker'

const email = faker.internet.email({provider:'test.com'}).toLowerCase()
const pass = 'qwe123'

Given('I visit EBAC Store register page', () => {
    cy.visit('/minha-conta')
})

When("I register with email and password", () => {
    cy.register(email, pass)
})

Then('My account page must be visible', () => {
    myAccountPage.pageName.should('have.text', 'Minha conta')  
})

