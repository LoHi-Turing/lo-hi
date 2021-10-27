Cypress.Commands.add('load', () => {
  cy.intercept('GET','https://lohi-api.herokuapp.com/api/v1/location?location=Denver',{fixture:'denver.json'})
  cy.intercept('GET','https://lohi-api.herokuapp.com/api/v1/recipes?elevation=5387',{fixture:'recipeHi.json'})
  cy.intercept('GET','https://lohi-api.herokuapp.com/api/v1/location?location=90094',{fixture:'90094.json'})
  cy.intercept('GET','https://lohi-api.herokuapp.com/api/v1/recipes?elevation=29',{fixture:'recipeLow.json'})
  cy.visit('http://localhost:3000/')
  cy.wait(2000)
})

// we need a info very different in the json file so I can know if it is intercepting 


// one other way to use the intercep 
  // cy.intercept('GET', 'https://lohi-api.herokuapp.com/api/v1/location?location=Denver', {
  //   fixture:'location.json',
  // }).as('locationData')
  // cy.wait('@locationData')

// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
