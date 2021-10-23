Cypress.Commands.add('load', () => {
  cy.visit('http://localhost:3000')

  cy.intercept('https://lohi-api.herokuapp.com/api/v1/location?location=90210', {
    body: {
      data: [
        {
          id: null,
          type: 'location',
          attributes: {
            elevation: 103, 
            humidity: 74,
            location: 'Beverly Hills',
            state: 'CA'
          }
        }
      ]
    }
  })
})

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
