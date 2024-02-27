// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (user, pass) => {
    const fd = new FormData()
    fd.append('log', user)
    fd.append('pwd', pass)
    fd.append('wp-submit', 'Acessar')
    fd.append('redirect-to', `/wp-admin`)
    fd.append('testcookie', 1)
    
    cy.request({
        url: '/wp-login.php',
        method: 'POST',
        body: fd
    }).then(resp => {
        resp.headers['set-cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const divisor = firstPart.indexOf('=')
            const key = firstPart.substring(0, divisor)
            const value = firstPart.substring(divisor+1)
            cy.setCookie(key, value)
        })
    })

    cy.visit('wp-admin')
})

Cypress.Commands.add('register', (email, pass) => {
    const fd = new FormData()
    fd.append('email', email)
    fd.append('password', pass)
    fd.append('woocommerce-register-nonce', '4f7be03d96')
    fd.append('_wp_http_referer', `/minha-conta/`)
    fd.append('register', 'Register')
    
    cy.request({
        url: '/minha-conta/',
        method: 'POST',
        body: fd
    })
    cy.visit('minha-conta')
})
