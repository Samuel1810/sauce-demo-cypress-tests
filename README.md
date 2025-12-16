# Sauce Demo — Cypress E2E Automation Tests

This repository showcases a **focused End-to-End test suite** built with [Cypress](https://www.cypress.io/)
to validate a critical e-commerce purchase flow on the
[Sauce Demo](https://www.saucedemo.com/) application.

---

## Why this project exists
This project exists to demonstrate how I approach **high-value E2E testing**
when time and scope are limited.
Instead of aiming for broad coverage, the focus is on **validating the core purchase journey**
and a representative negative checkout scenario.

## What this project proves
- **Critical path validation:** login → product selection → cart → checkout → purchase completion.
- **Risk-based scope:** only scenarios with direct business impact were automated.
- **Positive and negative coverage:** successful purchase and validation error during checkout.
- **Clear, readable E2E tests:** straightforward structure prioritizing clarity over abstraction.
- **Fast execution:** the entire suite can be executed locally in minutes.

> **Evidence:** All scenarios are implemented as Cypress specs under `cypress/e2e/`.
> 📌 **Coverage Map:** see [`docs/coverage/coverage-map.md`](docs/coverage/coverage-map.md)

## Out of scope (intentional)
To keep the project focused and realistic, the following were intentionally left out:
- Full regression coverage of all user journeys.
- Cross-browser and mobile testing.
- Performance, security, and accessibility testing.
- Extensive edge-case combinations.
- API-level testing (not required to validate this UI flow).

---

## Implemented Scenarios

### ✅ Positive — Login to Completed Purchase
- Login with valid credentials.
- Sort products by **Price (high to low)**.
- Add **Sauce Labs Fleece Jacket** to the cart.
- Verify product details in the cart and checkout overview.
- Complete the purchase with valid customer information.

### ❌ Negative — Checkout Without Postal Code
- Login with valid credentials.
- Add a product to the cart.
- Proceed to checkout without filling the **Postal Code** field.
- Verify the correct validation error message.

---

## Requirements
- **Node.js** (LTS version recommended)
- **Cypress**

---

## Project Structure
```text
cypress/
├─ e2e/
│  ├─ tc001_checkout_success.cy.js
│  └─ tc002_checkout_missing_postal.cy.js
├─ fixtures/
└─ support/
   ├─ commands.js
   └─ e2e.js

package.json
cypress.config.js
````

---

## Test Data

* **Username:** `standard_user`
* **Password:** `secret_sauce`
* **Sample Checkout Data:**

  * First Name: `Samuel`
  * Last Name: `Costa`
  * Postal Code: `12341234`

---

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/your-username/sauce-demo-cypress-tests.git
cd sauce-demo-cypress-tests
```

### 2. Install dependencies

```bash
npm install
```

### 3. Open Cypress Test Runner (interactive)

```bash
npx cypress open
```

### 4. Run tests in headless mode

```bash
npx cypress run
```

### 5. Run a single spec

```bash
npx cypress run --spec "cypress/e2e/tc001_checkout_success.cy.js"
```

### NPM Scripts

```json
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run"
  }
}
