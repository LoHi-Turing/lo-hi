describe('Home Page', () => {
  beforeEach(() => {
    cy.load()
      .get('.search-bar')
      .type('Denver')
      .get('.mag-glass').click()
      
  })

  it('Should update the url', () => {
    cy.url().should('include', 'all-categories')
  })

  it('Should include the user city in the header', () => {
    cy.get('.p-location').should('contain', 'Denver')
  })

  it('Should display the location\'s elevation and humidity', () => {
    cy.get('.p-elevation').should('be.visible')
      .get('.p-humidity').should('be.visible')
  })

  it('Should have a link "Home" in the Header for navigation', () => {
    cy.get('.nav-links > a').should('contain', 'Home')
  })

  it('Should contain an input to update the current location', () => {
    cy.get('.location').should('have.attr', 'placeholder', '->Change Location<-')
  })

  it('Should accept a new city input', () => {
    cy.get('.location')
      .type('90094{enter}')
      .get('.p-location').should('contain', 'Playa Vista')      
  })

  it('Should have a title', () => {
    cy.get('.baking-categories-title').should('contain', 'Baking Categories')
  })

  it('Should display the five category links', () => {
    cy.get('.links-container-line1 > :nth-child(1) > .links').should('contain', 'Cake')      
      .get('.links-container-line2 > :nth-child(1) > .links').should('contain', 'Muffin')      
      .get('.links-container-line1 > :nth-child(2) > .links').should('contain', 'Bread')
      .get('.links-container-line2 > :nth-child(2) > .links').should('contain', 'Pancakes')
      .get(':nth-child(3) > .links').should('contain', 'Cookies')      
  })
})