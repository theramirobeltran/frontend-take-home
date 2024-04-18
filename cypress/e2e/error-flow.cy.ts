Cypress.on("uncaught:exception", () => {
  return false;
});

describe("error scenario", () => {
  it("displays error boundary", () => {
    cy.visit("/");
    cy.contains("Package search tool");
    cy.failNetworkRequests();
    cy.searchForPackage("redux");
    cy.contains("Something went wrong, please try again.");
  });
});
