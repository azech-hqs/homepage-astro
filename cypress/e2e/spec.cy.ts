describe('basic page structure', () => {
  it('should contain a navbar', () => {
    cy.visit('/')
    cy.get("#navbar").should("exist");
  })
})
