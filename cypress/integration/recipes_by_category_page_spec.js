describe('Recipes by Category', () => {
  beforeEach(() => {
    cy.load()
      .get('.search-bar')
      .type('Denver')
      .get('.mag-glass').click()
      .get('.links-container-line1 > :nth-child(2) > .links').click()
  })

  it('Should update the url', () => {
    cy.url().should('include', 'Bread')
  })

  it('Should display the same header', () => {
    cy.get('.header-location').should('be.visible')
  })

  it('Should still display the current selected location', () => {
    cy.get('.p-location').should('contain', 'Denver')
  })

  it('Should contain a link to return to the home page', () => {
    cy.get('.nav-links > a').should('contain', 'Categories').click()
      .url().should('include', 'all-categories')
  })

  it('Should display the correct recipe category title', () => {
    cy.get('.category-title').should('contain', 'Bread Recipes')
  })

  it('Should display the recipe cards that are available', () => {
    cy.get('.recipe-card-main-img-container').should('be.visible')
  })

  it('Should display the recipe title', () => {
    cy.get('.recipe-card-title').should('contain', 'Chocolate Chip Banana Bread')
  })

  it('Should navigate to the recipe details page when the card is selected', () => {
    cy.get('.recipe-card-title').click()
      .url().should('include', '1')
      .get('.recipie-details-title').should('be.visible')
  })
})