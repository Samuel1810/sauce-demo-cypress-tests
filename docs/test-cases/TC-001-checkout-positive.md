Title / ID
    TC-001 — Log in to Checkout Success (Sauce Demo)

Description
    End-to-End Test that ensures the path from log in to checkout is working properly, users will have to log in using username and password (that exists in the sauce demo options), after logging in, select the ‘Price (high to low)’ filter on the products page then add a product to cart and go to checkout, fill Name, Last Name and Postal Code fields these are obligatory! Then confirm the order to return to the product page again!

Goal
    To verify if a user can log in normally, add a price filter on the product section, add a product to cart and place an order successfully.

Scope
    Login → Inventory → Cart → Checkout Step One → Checkout Step Two (Overview) → Checkout Complete → Back Home.

Preconditions
    - Base URL: https://www.saucedemo.com
    - Valid credentials available (e.g., Username: standard_user, Password: secret_sauce)
    - Chrome (local Cypress run)

Steps & Expected
    1. Navigate to the login page;
        -> Website navigates to the Login Page.
    2. Enter username and password valid credentials and click Login;
        -> Website navigates to the product listing page (URL contains /inventory).
    3. In the products page, select "Price (high to low)" in the sort control;
        -> Products will be sorted by highest prices to lowest prices.
    4. Choose a product to Click on "Add to cart", in this case was "Sauce Labs Fleece Jacket";
        -> Cart badge shows ‘1’ and product appears in cart list.
    5. Click on "Your Cart" (top right corner);
        -> The selected product appears in the cart list and website navigates to the "Your Cart" page (URL contains /cart).
    6. Click on the "Checkout" button;
        -> Website navigates to the "Checkout" page and checkout inputs are visible (URL contains /checkout-step-one).
    7. Enter First Name, Last Name and Postal Code fields, then click continue;
        -> Order Review is visible with the selected product (URL contains /checkout-step-two).
    8. Click on the "finish" button;
        -> The header "Thank you for your order!" is visible (URL contains /checkout-complete).
    9. Click on the "Back Home" button.
        -> Website navigates to the product listing page (URL contains /inventory).

Expected Result
    - The login is completed successfully;
    - The order is completed successfully and the success message is displayed;
    - The chosen product ("Sauce Labs Fleece Jacket") appears cart and overview;
    - No error messages are shown during the flow.