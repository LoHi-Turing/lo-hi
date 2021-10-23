describe('Recipe Details', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .get('.search-bar')
      .type('90210')
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
    cy.get('.p-location').should('contain', 'Beverly Hills')
  })

  it('Should have a link to return to the recipes by category page', () => {
    cy.get('a').should('contain', 'Bread')
  })

  it('Should return to the category page when the link is clicked', () => {
    cy.get('a').click()
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

  
})