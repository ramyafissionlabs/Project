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

Cypress.Commands.add("login", (username, password) => {
    cy.get('[placeholder="Username"]').type(username);
    cy.get('[placeholder="Password"]').type(password);
    cy.get('input[name="login-button"]').click();
  });
  //This function called Logout function
  
  //This functionality is required users to logout and log back in
  Cypress.Commands.add("logout", () =>
    //Custom Logout function created
    {
      //searching for logout button
      cy.get("#react-burger-menu-btn").click();
      //cy.wait(1000);
      //Click on logout button
      cy.get("#logout_sidebar_link").click();
    }
  );
  //This function called clearing function
  Cypress.Commands.add("clear_update", () =>
    //Custom clear_upadate function created
    {
      //Clear  the username field
      cy.get('[placeholder="Username"]').clear();
      //Clear  the password field
      cy.get('[placeholder="Password"]').clear();
    }
  );
  
