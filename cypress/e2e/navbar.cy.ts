describe("Navbar", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should exist", () => {
        cy.get("#navbar").should("exist");
    });

    it("should contain Home item", () => {
        cy.getBySel("navbar-home").should("exist").and("be.visible");
    });
});
