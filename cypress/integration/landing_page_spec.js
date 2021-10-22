describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should navigate to the landing page and the user should see a Search bar', () => {
    cy.get('input').should('be.visible')
  })

  it('Should display the company logo and information', () => {
    cy.get('.logo').should('be.visible')
      .get('.logo-and-search > :nth-child(5)').should('contain', 'With this website you will be able to have recipies')
  })

  it('Should have an input that accepts a zip code input', () => {
    cy.get('.search-bar')
      .type('80504')
      .should('have.value', '80504')
  })

  it('Should have an input that accepts a city name input', () => {
    cy.get('.search-bar')
      .type('Austin')
      .should('have.value', 'Austin')
  })

  it('Should route to the categories page when "Enter" has been selected', () => {
    cy.get('.search-bar')
      .type('80504')
      .should('have.value', '80504')
      .get('.mag-glass').click()
      .get('.baking-categories-title').should('be.visible')
  })

})