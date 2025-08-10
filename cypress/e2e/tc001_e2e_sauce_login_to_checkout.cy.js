describe('Sauce Demo - Login to Checkout completed', () => {

  it('should log in with valid credentials', () => {
    cy.visit('https://www.saucedemo.com/');

    // Enter username
    cy.get('#user-name').should('be.visible').type('standard_user');

    // Enter password
    cy.get('#password').type('secret_sauce');

    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory');
    cy.get('[data-test="inventory-list"]').should('be.visible');

    cy.get('[data-test="product-sort-container"]').should('be.visible');
    cy.get('[data-test="product-sort-container"]').select('Price (high to low)');

    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('[data-test="shopping-cart-badge"]').should('contain', '1');

    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart');
    cy.get('[data-test="cart-list"]').should('be.visible');

    cy.contains('[data-test="inventory-item-name"]', 'Sauce Labs Fleece Jacket').should('be.visible');

    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one');
    cy.get('.checkout_info').should('be.visible');

    cy.get('[data-test="firstName"]').type('Samuel');
    cy.get('[data-test="lastName"]').type('Costa');
    cy.get('[data-test="postalCode"]').type('12341234');

    cy.get('[data-test="continue"]').click();

    cy.url().should('include', '/checkout-step-two');
    cy.get('.summary_info').should('be.visible');

    cy.contains('[data-test="inventory-item-name"]', 'Sauce Labs Fleece Jacket').should('be.visible');

    cy.get('[data-test="finish"]').click();

    cy.url().should('include', '/checkout-complete');
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');

    cy.get('[data-test="back-to-products"]').should('be.visible');
    cy.get('[data-test="back-to-products"]').click();

    cy.url().should('include', '/inventory');
    cy.get('[data-test="inventory-list"]').should('be.visible');
  });

});