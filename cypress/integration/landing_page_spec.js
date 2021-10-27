describe('Landing Page', () => {
  beforeEach(() => {
    cy.load()
  })

  it('Should navigate to the landing page and the user should see a Search bar', () => {
    cy.get('input').should('be.visible')
  })

  it('Should display the company logo and information', () => {
    cy.get('.logo').should('be.visible')
      .get('.logo-and-search > :nth-child(6)').should('contain', 'Our pre-loaded recipies will automatically')
  })

  it('Should have an input that accepts a zip code input', () => {
    cy.get('.search-bar')
      .type('90094')
      .should('have.value', '90094')
  })

  it('Should have an input that accepts a city name input', () => {
    cy.get('.search-bar')
      .type('Denver')
      .should('have.value', 'Denver')
  })

  it('Should route to the categories page when "Enter" has been selected', () => {
    cy.get('.search-bar')
      .type('90094')
      .should('have.value', '90094')
      .get('.mag-glass').click()
      .get('.baking-categories-title').should('be.visible')
  })

})