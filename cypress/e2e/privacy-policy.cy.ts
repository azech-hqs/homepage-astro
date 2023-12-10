describe("Privacy policy", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it.skip("should open and close", () => {
        cy.get('[data-cy="open-privacy-policy"]').should("exist");
        cy.get('[data-cy="title-privacy-policy"]').should("not.exist");

        // open modal
        cy.get('[data-cy="open-privacy-policy"]')
            .click()
            .then(() => {
                cy.get('[data-cy="title-privacy-policy"]').should("exist");
                cy.get('[data-cy="close-privacy-policy"]').should("exist");
            });

        // close modal
        cy.get('[data-cy="close-privacy-policy"]').click();
        cy.get('[data-cy="title-privacy-policy"]').should("not.exist");
        cy.get('[data-cy="close-privacy-policy"]').should("not.exist");
    });
});
