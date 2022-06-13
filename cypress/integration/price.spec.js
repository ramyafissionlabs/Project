describe("Shopping Highest and Lowest Items", () => {
  //BeforeEach is for each and every it_block this can be executed
  beforeEach("Launch Application", () => {
    //Launch the application
    cy.visit("https://www.saucedemo.com/");
    /*validation for whether we were launch expected application or not based on applicationame,
   it includes in url then we confirm we are in coorect page*/
    cy.url().should("include", "saucedemo");
    //Verify the application  expected title of the page equal to given title name or not
    cy.title().should("be.equal", "Swag Labs");
    cy.login("standard_user", "secret_sauce");
    //Validate the navigation page whether we are in expected page or not based on that page lable
    cy.contains("Products");
    
  });

  //Oredering lowest Price item
  it("Test For ordering lowest price item ", () => {
    //Calls the Productpage function exist in command.js in support
    
    //select option low to high  for selecting lowest cost item
    cy.get(".product_sort_container").select("Price (low to high)").as("val");
    cy.get("@val").should("have.value", "lohi");
    cy.get(".active_option").should("contain.text", "Price (low to high)");
    // Validate whether first element in the list is  the lowest price item or not
    cy.get(".inventory_item_price")
      .eq(0)
      .then(($el) => {
        var lprice = $el.text(); //dynamically generate 7.99
        console.log(lprice); //checking we are getting price valure or not
        cy.wrap($el).should("contain.text", lprice);
      });
    //validate title of the lowest price item
    cy.get(".inventory_item_name")
      .eq(0)
      .then((textvalidation) => {
        let c_text = textvalidation.text();
        console.log(c_text);
        cy.wrap(textvalidation).should("contain.text", c_text);
        //Click on add cart option
        cy.get("#add-to-cart-sauce-labs-onesie")
          .should("contain.text", "Add to cart")
          .click();
        //Click on shopping link
        cy.get(".shopping_cart_link").click();
        //validate selected item and in add to cart item same or not
        cy.get(".inventory_item_name")
          .eq(0)
          .then((textvalidation_sl) => {
            let s_text = textvalidation_sl.text();
            console.log(s_text);
            expect(s_text).to.be.equal(c_text);
          });
      });

    //validate index because to validate how many items we selected that much items we contain or not
    cy.get(".cart_quantity").should("have.text", "1");
    // clicking Checkout
    cy.get("#checkout").should("contain.text", "Checkout").click();
    //validate whether we are in checkout page or not
    cy.get(".title").should("have.text", "Checkout: Your Information");
    //type information for proceeding order
    cy.get("#first-name").type("Ramya");
    cy.get("#last-name").type("Sri");
    cy.get("#postal-code").type("50006");
    cy.get("#continue").click();
    cy.get(".header_secondary_container .title").should(
      "contain.text",
      "Checkout: Overview"
    );
    //validate whether we are getting whatever item we selected
    cy.get("#item_2_title_link").should("have.text", "Sauce Labs Onesie");
    cy.get("#finish").should("have.text", "Finish").click();
    //Validate my oreder is placed or not
    cy.get(".complete-header").should("have.text", "THANK YOU FOR YOUR ORDER");
    //this logout function i.e in command.js in support folder it is reusable
    cy.logout();
  });

  //Ordering highest price item
  it("Test For ordering highest price item ", () => {
    //cy.ProductsPage();
    //select option  high  to low  for selecting highest cost item
    cy.get(".product_sort_container").select("Price (high to low)").as("hval");
    //first element in the list,i.e the highest  price
    cy.get("@hval").should("have.value", "hilo");
    //Validate active option is high to low or not
    cy.get(".active_option").should("contain.text", "Price (high to low)"); //eq(0);//invoke('text');
    //first element in the list,i.e the lowest price,capture that value
    cy.get(".inventory_item_price")
      .first()
      .then(($el) => {
        var hprice = $el.text(); //dynamically generate 49.99
        console.log(hprice);
        cy.wrap($el).should("contain.text", hprice);
      });
    //Vlaidate select item
    cy.get(".inventory_item_name")
      .eq(0)
      .then((textvalidation) => {
        let c_text = textvalidation.text();
        console.log(c_text);
        cy.wrap(textvalidation).should("contain.text", c_text);

        //Click on add cart option
        cy.get("#add-to-cart-sauce-labs-fleece-jacket").should(
          "contain.text",
          "Add to cart"
        );
        cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
        //Click on shopping link
        cy.get(".shopping_cart_link").click();
        //validate selected item and in add to cart item same or not
        cy.get(".inventory_item_name")
          .eq(0)
          .then((textvalidation_sl) => {
            let s_text = textvalidation_sl.text();
            console.log(s_text);
            expect(s_text).to.be.equal(c_text);
          });
      });
    //validate index because to validate how many items we selected that much items we contain or not
    cy.get(".cart_quantity").should("have.text", "1");
    // clicking Checkout
    cy.get("#checkout").should("contain.text", "Checkout").click();
    //validate whether we are in checkout page or not
    cy.get(".title").should("have.text", "Checkout: Your Information");
    //type information for proceeding order
    cy.get("#first-name").type("Ramya");
    cy.get("#last-name").type("Sri");
    cy.get("#postal-code").type("50006");
    cy.get("#continue").click();
    cy.get(".header_secondary_container .title").should(
      "contain.text",
      "Checkout: Overview"
    );
    //validate whether we are getting whatever item we selected
    cy.get("#item_5_title_link").should(
      "have.text",
      "Sauce Labs Fleece Jacket"
    );
    cy.get("#finish").should("have.text", "Finish").click();
    //Validate my oreder is placed or not
    cy.get(".complete-header").should("have.text", "THANK YOU FOR YOUR ORDER");
    //this logout function i.e in command.js in support folder it is reusable
    cy.logout();
  });
});
