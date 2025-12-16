# Coverage Map — Sauce Demo Cypress Automation Tests

## How to read this map
This table explains **what is covered**, **why it matters (risk)**, **how it is tested**, and **where the evidence lives**
(spec files + (optional) future docs).

**Risk legend**
- **High:** blocks purchase / core user journey / impacts order completion
- **Medium:** important but with workaround / limited blast radius
- **Low:** cosmetic or low-impact behavior

---

## Coverage Table

| ID | Area / Flow | Risk | What we validate | Test Type | Automated? | Evidence (spec) | Notes / QA decision |
|---|---|---:|---|---|---|---|---|
| TC001 | Purchase flow — Login to completed purchase | High | User can login, select product, add to cart, proceed to checkout, and complete purchase successfully | E2E UI | ✅ Yes | `cypress/e2e/tc001_checkout_success.cy.js` | Core business flow. Focused “happy path” validates the highest value journey end-to-end |
| TC002 | Checkout validation — Missing Postal Code | High | Checkout blocks continuation when required field is missing; correct error message is displayed | E2E UI | ✅ Yes | `cypress/e2e/tc002_checkout_missing_postal.cy.js` | One representative negative scenario chosen to validate guardrails without bloating the suite |

---

## Intentional gaps (manual / future candidates)

These are valuable tests, but intentionally excluded from the automated E2E suite to keep scope focused and stable.

| Candidate ID | Area / Flow | Risk | What to validate | Recommended Type | Automated now? | Why not automated (yet) |
|---|---|---:|---|---|---|---|
| M001 | Authentication — Locked-out user | Medium | Locked user cannot login; proper error is shown | Targeted E2E | ❌ No | Easy to add later, but kept out to preserve minimal suite scope |
| M002 | Authentication — Problem user / performance glitch user | Medium | App behaves with inconsistent images/loading; user can still complete key steps | Exploratory | ❌ No | Demo-specific behavior; better validated via exploratory notes |
| M003 | Cart management | Medium | Add/remove items, quantity changes (if any), empty cart state | Targeted E2E | ❌ No | Multiple combinations; add only if cart becomes a focus area |
| M004 | Sorting / filtering robustness | Low | Sorting options behave consistently across products | Exploratory + targeted assertion | ❌ No | Low business risk for the portfolio scope; included only as a step inside TC001 |
| M005 | UI messages and edge validations | Low | Boundary checks for first/last name, postal code format (if applicable) | UI validation tests | ❌ No | Would inflate suite; one high-value negative case (TC002) is sufficient for now |
| M006 | Cross-browser / responsive | Medium | Visual/interaction differences across browsers/devices | Cross-browser run | ❌ No | Out of scope for this repo; belongs to CI matrix if required |

---

## Maintenance rule (keep it simple)
- Each automated TC must have:
  - 1 spec file under `cypress/e2e/`
- When a new TC is added, update this map in the same PR/commit.