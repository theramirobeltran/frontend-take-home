/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.addAll({
  failNetworkRequests: () => {
    cy.get("[data-testid=settings-trigger]").click();
    cy.contains("Fail Network Requests").click();
    cy.get("body").click();
  },
  searchForPackage: (packageName: string) => {
    cy.get("[data-testid=package-search-form]").within(() => {
      cy.get("input").type(packageName ?? "react");
      cy.get("button").click();
    });
  },
});

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable {
    failNetworkRequests(): Chainable;
    searchForPackage(packageName: string): Chainable;
  }
}

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare module "cypress" {
//   interface Chainable<Subject> {
//     failNetworkRequests(): Chainable<Subject>;
//     searchForPackage(packageName: string): Chainable<Subject>;
//   }
// }
