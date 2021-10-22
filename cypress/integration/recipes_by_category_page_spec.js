describe('Recipes by Category', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .get('.search-bar')
      .type('90210')
      .get('.mag-glass').click()
      .get('.links-container-line1 > :nth-child(2) > .links').click()
  })

  it('Should have all recipes displayed', () => {

  })
})