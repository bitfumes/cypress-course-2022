// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
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

Cypress.Commands.add("posts", () => {
  cy.get(".PostList_root__Cj_24")
    .find(".Post_root__6WEkA")
    .should("be.visible");
});

Cypress.Commands.add("createPost", (data) => {
  cy.get(".Input_input__fo8G3")
    .type(data)
    .then(() => {
      cy.get("form").submit();
      cy.contains("You have posted successfully");
    });
});

Cypress.Commands.add("login", () => {
  cy.visit(`${Cypress.env("baseURL")}/login`);
  cy.get("input[type='email'").type("abc@gmail.com");
  cy.get("input[type='password'").type("password");
  cy.get("form").submit();
});
