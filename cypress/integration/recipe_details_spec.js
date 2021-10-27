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
    cy.get('.recipie-details-title').should('contain', 'Chocolate Chip Banana Bread')
  })

  it('Should display ingredients', () => {
    cy.get('ul > :nth-child(1)').should('contain', 'Overripe Bananas')
      .get('ul > :nth-child(6)').should('contain', 'All Purpose Flour')
      .get('ul > :nth-child(9)').should('contain', 'Cinnamon')
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
})