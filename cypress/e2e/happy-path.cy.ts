describe("happy path", () => {
  it("loads successfully", () => {
    cy.visit("/");
    cy.contains("Package search tool");
    cy.get("[data-testid=package-search-form]").within(() => {
      cy.get("input").should("exist");
      cy.get("button").should("exist");
    });
  });

  it("loads results", () => {
    cy.visit("/");
    cy.searchForPackage("react");
    cy.get("[data-testid=package-link]").should("have.length.gt", 0);
  });
});
