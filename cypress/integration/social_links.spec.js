describe("Verification of social Links", () => {
  //BeforeEach is for each and every it_block this can be executed
  before("Launch Application", () => {
    //Launch the application
    cy.visit("https://www.saucedemo.com/");
    //validation for whether we were launch expected application or not based on applicationame,it includes in url then we confirm we are in coorect page
    cy.url().should("include", "saucedemo");
    //Verify the application  expected title of the page equal to given title name or not
    cy.title().should("be.equal", "Swag Labs");
    //Login with valid credentials
    cy.login("standard_user", "secret_sauce");
    //Validate the navigation page whether we are in expected page or not based on that page lable
    cy.contains("Products");
  });
  //Validate Social Links
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
    //This function call logout function i.e,exist in command.js
    cy.logout();
  });
});
