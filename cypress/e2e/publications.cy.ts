describe("Publications page", () => {
    beforeEach(() => {
        cy.visit("/publications");
    });

    it("should contain the publication list", () => {
        cy.getBySel("publications").should("exist").and("be.visible");
    });

    it("should have more than one publication listed", () => {
        cy.getBySel("publications").children("article").should("have.length.greaterThan", 1);
    });

    it("should open articels in new tab", () => {
        cy.getBySel("publications")
            .children("article")
            .each((art) => {
                cy.wrap(art).find("h2 > a").should("have.attr", "target", "_blank");
            });
    });
});
