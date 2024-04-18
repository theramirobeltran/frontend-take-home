describe("happy path", () => {
  it("loads successfully", () => {
    cy.visit("/");
    cy.contains("Package search tool");
    cy.get("[data-testid=package-search-form]").within(() => {
      cy.get("input").should("exist");
      cy.get("button").should("exist");
    });
  });
});
