/// <reference types="Cypress" />

describe("Login Functionality of swaglab application", () => {
  beforeEach("Launch Application", () => {
    cy.visit("https://www.saucedemo.com/");
    //validation for whether we were launch expected application or not based on applicationame,it includes in url then we confirm we are in coorect page
    cy.url().should("include", "saucedemo");
    //Verify the application  expected title of the page equal to given title name or not
    cy.title().should("be.equal", "Swag Labs");
  });

  it("LoginPage Validation with valid username and password", () => {
    cy.login("standard_user", "secret_sauce");
    // verfiy the user is successfully loggedin.
    cy.contains("Products");
    cy.logout();
    // Assert for successful logout based on title of the page
    cy.title().should("be.equal", "Swag Labs");
  });

  it("LoginPage Validation with valid username and invalid password", () => {
    cy.login("standard_user", "secet_sauce");
    //Validating error message by using css
    cy.get(
      "#login_button_container > div > form > div.error-message-container.error"
    ).should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
    
    //closing error window
    cy.get(".error-button").click();
    //clear and update username and  passwords input fields
    cy.clear_update();
  });

  it("LoginPage Validation with invalid username and valid password", () => {
    cy.login("standad_user", "secret_sauce");
    //Handling error message by css selector
    cy.get(
      "#login_button_container > div > form > div.error-message-container.error"
    ).should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
    
    //closing error window
    cy.get(".error-button").click();
    //clear and update username and  passwords input fields
    cy.clear_update();
  });

  it("LoginPage Validation with invalid username and invalid password", () => {
    cy.login("standad_user", "secet_sauce");
    //validate error message using css selector
    cy.get(
      "#login_button_container > div > form > div.error-message-container.error"
    ).should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
    //Closing error window
    cy.get(".error-button").click();
    //clear and update username and  passwords input fields
    cy.clear_update();
    //Below command for cursor move to username inputfield
    cy.get('[placeholder="Username"]').click();
  });

  it("LoginPage Validation with blank username and blank password", () => {
    //entering blank username and password
    cy.get('[placeholder="Username"]').click();
    cy.get('[placeholder="Password"]').click();
    //Click on login button
    cy.get('[type="submit"]').click();
    
    //validate error message using css selector
    cy.get(
      "#login_button_container > div > form > div.error-message-container.error"
    ).should("have.text", "Epic sadface: Username is required");
    
    //Closing error window
    cy.get(".error-button").click();
    //Below command for cursor move to username inputfield
    cy.get('[placeholder="Username"]').click();
  });

  it("LoginPage Validation with blank username and valid password", () => {
    cy.get('[placeholder="Username"]').click();
    cy.get('[placeholder="Password"]').type("secret_sauce");
    //Click on login button
    cy.get('[type="submit"]').click();
    
    //validate error message using css selector
    cy.get(
      "#login_button_container > div > form > div.error-message-container.error"
    ).should("have.text", "Epic sadface: Username is required");
    //Closing error window
    cy.get(".error-button").click();
    //Below command for cursor move to username inputfield
    cy.get('[placeholder="Username"]').click();
  });

  it("LoginPage Validation with blank username and in-valid password", () => {
    //entering blank username and password
    cy.get('[placeholder="Username"]').click();
    cy.get('[placeholder="Password"]').type("ecret_sauce");
    //Click on login button
    cy.get('[type="submit"]').click();
    //validate error message using css selector
    cy.get(
      "#login_button_container > div > form > div.error-message-container.error"
    ).should("have.text", "Epic sadface: Username is required");
    //Closing error window
    cy.get(".error-button").click();
    //Below command for cursor move to username inputfield
    cy.get('[placeholder="Username"]').click();
  });

  it("LoginPage Validation with valid username and blank password", () => {
    cy.get('[placeholder="Username"]').type("standard_user");
    cy.get('[placeholder="Password"]').click();
    //Click on login button
    cy.get('[type="submit"]').click();
    
    //validate error message using css selector
    cy.get(
      "#login_button_container > div > form > div.error-message-container.error"
    ).should("have.text", "Epic sadface: Password is required");
    //Closing error window
    cy.get(".error-button").click();
    //Below command for cursor move to username inputfield
    cy.get('[placeholder="Username"]').click();
  });

  it("LoginPage Validation with invalid username and blank password", () => {
    cy.get('[placeholder="Username"]').type("tandard_user");
    cy.get('[placeholder="Password"]').click();
    //Click on login button
    cy.get('[type="submit"]').click();
    
    //validate error message using css selector
    cy.get(
      "#login_button_container > div > form > div.error-message-container.error"
    ).should("have.text", "Epic sadface: Password is required");
    //Closing error window
    cy.get(".error-button").click();
    //Below command for cursor move to username inputfield
    cy.get('[placeholder="Username"]').click();
    cy.clear_update();
  });
});
