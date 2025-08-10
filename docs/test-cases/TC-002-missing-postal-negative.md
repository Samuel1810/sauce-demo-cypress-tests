Title / ID
    TC-002 - Checkout blocked when required info is missing (Postal Code)

Description
    Ensure the application does not allow users to proceed from Checkout Step One when a required field is missing. This case covers the Postal Code field. 

Goal
    Verify the system blocks continuation and displays a clear error message when the Postal Code is not provided.

Scope
    Login → Inventory → Cart → Checkout Step One (no progression to Step Two)

Preconditions
    - Base URL: https://www.saucedemo.com
    - Valid credentials available (e.g., Username: standard_user, Password: secret_sauce)
    - Chrome (local Cypress run)

Steps & Expected
    1. Navigate to the login page;
        -> website navigates to the login Page.
    2. Enter username and password valid credentials and click Login;
        -> website navigates to the product listing page (URL contains /inventory).
    3. Click "Add to cart" on a chosen product;
        -> Cart badge shows ‘1’ and product appears in cart list.
    4. Click on "Your Cart" (top right corner);
        -> The selected product appears in the cart list and website navigates to the "Your Cart" page (URL contains /cart).
    5. Click on the "Checkout" button;
        -> website navigates to the "Checkout Step One" page (URL contains /checkout-step-one)  and checkout inputs are visible.
    6. Leave the Postal Code field empty, then click Continue;
        -> Remain at /checkout-step-one;
        -> [data-test="error"] is visible and contains "Postal Code is required";
        -> Order overview is not displayed.

Expected Result
    - The login is completed successfully;
    - The order is not completed successfully and order overview is not displayed;
    - It should appear an error saying that the Postal Code field is required;