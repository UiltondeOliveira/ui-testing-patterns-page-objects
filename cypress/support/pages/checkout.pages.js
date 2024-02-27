/// <reference types="cypress"/>

class CheckoutPage {
    get #firstName() {return cy.get("#billing_first_name")}
    get #lastName() {return cy.get("#billing_last_name")}
    get #address() {return cy.get("#billing_address_1")}
    get #city() {return cy.get("#billing_city")}
    get #country() {return cy.get("#select2-billing_country-container")}
    get #state() {return cy.get("#select2-billing_state-container")}
    get #postcode() {return cy.get("#billing_postcode")}
    get #phone() {return cy.get("#billing_phone")}
    get #email() {return cy.get("#billing_email")}
    get #terms() {return cy.get("#terms")}
    get #order() {return cy.get("#place_order")}
    get #pageTitle() {return cy.get(".page-title")}

    fillBillingDetails(firstName, lastName, country, address, city, state, postcode, phone, email){
        this.#firstName.type(firstName)
        this.#lastName.type(lastName)
        this.#country.type(country +'{enter}')
        this.#address.type(address)
        this.#city.type(city)
        this.#state.type(state +'{enter}')
        this.#postcode.type(postcode)
        this.#phone.type(phone)
        this.#email.type(email)
        this.#terms.click()
        this.#order.click()
    }

    getPagetitle (title){
        this.#pageTitle().should(title)
    }
}


module.exports = new CheckoutPage()