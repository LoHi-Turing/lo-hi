describe('Recipe Details', () => {
  beforeEach(() => {
    cy.load()
      .get('.search-bar')
      .type('Denver')
      .get('.mag-glass').click()
      .get('.links-container-line1 > :nth-child(2) > .links').click()
      .get('.recipe-card-title').click()
  })

  it('Should include the id in the url', () => {
    cy.url().should('include', '1')
  })

  it('Should display the same header', () => {
    cy.get('.header-location').should('be.visible')
  })

  it('Should still display the current selected location', () => {
    cy.get('.p-location').should('contain', 'Denver')
  })

  it('Should have a link to return to the recipes by category page', () => {
    cy.get('a').should('contain', 'Bread')
  })

  it('Should return to the category page when the link is clicked', () => {
    cy.get('.nav-links > a').click()
      .url().should('include', 'Bread')
      .get('.recipes-by-category').should('be.visible')
  })

  it('Should display the recipe title', () => {
    cy.get('.recipie-details-title').should('contain', 'Chocolate Chip Brad Pitt')
  })

  it('Should display ingredients for Hi altitude', () => {
    cy.get('ul > :nth-child(1)').should('contain', 'Overripe Bananas')
      .get('ul > :nth-child(6)').should('contain', 'All Purpose Flour')
      .get('ul > :nth-child(9)').should('contain', 'Cinnamon')
      .get('.recipe-details-ingredient-amounts > :nth-child(2)').should('contain', '.75 cups - 0.75 tablespoons')
  })

  it('Should have an Instruction title', () => {
    cy.get('.recipe-details-instructions-title').should('contain', 'Instruction')
  })

  it('Should provide preparation instructions', () => {
    cy.get('.recipe-details-description > :nth-child(1)').should('contain', 'Preheat the oven to 350ºF')
  })

  it('Should display a cook time', () => {
    cy.get('.recipe-details-cook-time').should('contain', '1 HOUR 5 MINUTES')
  })

  it('Should accept a new city input and have a different altitude ingredients', () => {
    cy.get('.location')
      .type('90094{enter}')
      .get('.p-location').should('contain', 'Playa Vista') 
    cy.wait(2000)
      .get('.recipie-details-title').should('contain', 'Chocolate Chip Brad Pitt')
      .get('.recipe-details-ingredient-amounts > :nth-child(2)').should('contain', '.75 cups')
  })
})