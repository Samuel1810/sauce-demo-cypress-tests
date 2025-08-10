# Sauce Demo Cypress Automation Tests

This project contains End-to-End automated tests using [Cypress](https://www.cypress.io/) for the [Sauce Demo](https://www.saucedemo.com/) website.

## Implemented Scenarios

### ✅ Positive Scenario — Login to Completed Purchase
- Login with valid credentials.
- Sort products by **Price (high to low)**.
- Add **Sauce Labs Fleece Jacket** to the cart.
- Verify the product name in the cart and checkout overview.
- Complete the purchase with valid customer information.

### ❌ Negative Scenario — Checkout Without Postal Code
- Login with valid credentials.
- Add any product to the cart.
- Proceed to checkout without filling the **Postal Code** field.
- Verify that the correct error message is displayed.

## Requirements
- **Node.js** (LTS version recommended)
- **Cypress** installed locally or globally

## Project Structure
    cypress/
    e2e/
    tc001_checkout_success.cy.js
    tc002_checkout_missing_postal.cy.js
    fixtures/
    support/
    commands.js
    e2e.js
    package.json
    cypress.config.js

## Test Data
    - **Username:** `standard_user`
    - **Password:** `secret_sauce`
    - **Sample Checkout Data:**
    - First Name: `Samuel`
    - Last Name: `Costa`
    - Postal Code: `12341234`

## How to Run

### 1. Clone the repository
```bash
git clone https://github.com/your-username/sauce-demo-cypress-tests.git
cd sauce-demo-cypress-test
```
### 2. Install dependencies
    npm install
### 3. Open Cypress Test Runner (interactive)
    npx cypress open
### 4. Run tests in headless mode
    npx cypress run
### 5. Run a single spec in headless mode
    npx cypress run --spec "cypress/e2e/tc001_checkout_success.cy.js"

### NPM Scripts
```json
{
    "scripts": {
        "cy:open": "cypress open",
        "cy:run": "cypress run"
    }
}
```
## Next Steps
    Apply Page Object Model (POM) for better maintainability.
    Integrate with GitHub Actions for CI.
    Add more scenarios (remove from cart, logout, error states).
    Include API tests if available.
