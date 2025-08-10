describe('Sauce Demo - Checkout with Missing Postal Code', () => {
  it('should not allow checkout without postal code', () => {
    cy.visit('https://www.saucedemo.com/');

    // Enter username
    cy.get('[data-test="username"]').should('be.visible').type('standard_user');

    // Enter password
    cy.get('[data-test="password"]').type('secret_sauce');

    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory');
    cy.get('[data-test="inventory-list"]').should('be.visible');

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-badge"]').should('contain', '1');

    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart');
    cy.get('[data-test="cart-list"]').should('be.visible');

    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one');
    cy.get('.checkout_info').should('be.visible');

    // Leave postal code empty
    cy.get('[data-test="firstName"]').type('Samuel');
    cy.get('[data-test="lastName"]').type('Costa');
    
    // Attempt to continue without postal code
    cy.get('[data-test="continue"]').click();

    // Verify error message is displayed
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Error: Postal Code is required');

    // Ensure we are still on the checkout step one page
    cy.url().should('include', '/checkout-step-one');
    cy.get('.checkout_info').should('be.visible');
  });

});