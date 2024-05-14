/// <reference types="cypress" />

class CartPage {
    get #product() {return cy.get(`[data-testid="home-product-list"] > div > :nth-child(2)`)}
    get #addToCart() {return cy.get('[data-testid="addToCart"] > div')}
    get #pageTitle() {return cy.get('.r-1awozwy > [style="color: rgb(255, 255, 255); font-size: 20px; font-family: Montserrat-Bold;"]')}
    get #productName() {return cy.get('[data-testid="productName"]')}
    get #removeItem() {return cy.get('[data-testid="removeItem"]')}
    get #btnRemove() {return cy.get('[data-testid="remove"] > div')}
    get #emptyCartMessage(){return cy.get('[data-testid="emptyCart"]')}

    addProduct(){
        this.#product.click()
        this.#addToCart.click()
    }

    getPageTitle(pageTitle){
        this.#pageTitle.should('have.text', pageTitle)
    }

    getProductName(productName){
        this.#productName.should('have.text', productName)
    }

    decreseProduct(){
        this.#removeItem.click()
    }

    deleteProduct(){
        this.#btnRemove.click()
    }

    getEmptyCartMessage(message){
        cy.wait(1000)
        this.#emptyCartMessage.should('have.text', message)
    }
}

module.exports = new CartPage()