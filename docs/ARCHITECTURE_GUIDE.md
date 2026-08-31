# MedhaIQ ERP - System Architecture & Engineering Principles

## 1. Modular Monorepo Architecture
MedhaIQ ERP separates concerns into three top-level directories:
- `server/`: Core Node.js API Service layer with domain logic modules, security, and data access.
- `client/`: React 18 frontend dashboard rendering responsive views and stateful user interactions.
- `tests/`: Automated test harness validating end-to-end business rules across all modules.

## 2. Security Architecture
- **JWT (JSON Web Tokens)**: Stateless token issuance signed with SHA-256 HMAC algorithm.
- **Password Hashing**: PBKDF2 with 1,000 iterations and unique 16-byte random salts.
- **RBAC (Role-Based Access Control)**: Enforces role permissions at the router layer.

## 3. Data Integrity & Financial Ledger Rules
- Double-entry balance calculation for invoices: `totalAmount = subtotal + fineAmount - discountAmount`.
- Atomicity: Balance updating occurs synchronously with payment receipt logging.
