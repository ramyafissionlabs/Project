describe("Verification of social Links", () => {
  before("Launch Application", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.url().should("include", "saucedemo");
    cy.title().should("be.equal", "Swag Labs");
    cy.login("standard_user", "secret_sauce");
    
    // Verify the user is successfully logged in.
    cy.contains("Products");
  });
  
  it("Test For Social Links", () => {
    //cursor in social links
    cy.get(".social").trigger("mouseover");
    
    //Click On twitter link
    cy.get(".social_twitter a").invoke("removeAttr", "target").click();
    
    //Validate Url of twitter whether we are launching proper page or not
    cy.url().should("include", "https://twitter.com/saucelabs");
    //wait for launching  application 
    cy.wait(2000);
    //Navigate to back Page
    cy.go("back");
    //Click on facebook link
    cy.get(".social_facebook a").invoke("removeAttr", "target").click();
    
    //Validate url of facebook whther we are launching expected page or not
    cy.url().should("include", "https://www.facebook.com/saucelabs");
    //wait for launching  application 
    cy.wait(2000);
    cy.go("back");
    
    //Click on linked in link
    cy.get(".social_linkedin a").invoke("removeAttr", "target").click();
    
    //Validate url of Linkedin whther we are launching expected page or not
    cy.url().should("include", "https://www.linkedin.com/company/sauce-labs/");
    //wait for launching  application 
    cy.wait(2000);
    cy.go("back");
    
    // Logs out from application
    cy.logout();
  });
});
