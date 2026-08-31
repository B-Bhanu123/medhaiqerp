# MedhaIQ ERP - Next-Generation Enterprise Education Platform

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/B-Bhanu123/medhaiqerp)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v20-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-cyan)](https://react.dev/)

MedhaIQ ERP is an enterprise-grade Education Resource Planning solution designed for universities, colleges, K-12 institutions, and educational conglomerates. It unifies administrative workflows, academic governance, student lifecycles, financial operations, HR & payroll, library circulation, campus housing, and transportation management.

---

## 📋 Dependencies

The platform requires the following runtime dependencies:
- **Node.js**: `v20.0.0` or higher
- **npm**: `v10.0.0` or higher
- **TypeScript**: `v5.3.3`
- **Docker**: `v24.0.0` (Optional for containerized deployment)

---

## 🛠 Installation

To install all dependencies for both root workspace, server, and client packages:

```bash
# Clone the repository
git clone https://github.com/B-Bhanu123/medhaiqerp.git
cd medhaiqerp

# Install root dependencies
npm install

# Setup server and client dependencies
npm run setup
```

---

## 🏗 Build

To compile TypeScript source files for backend API service engine and React frontend bundle:

```bash
# Build both server and client components
npm run build
```

Alternatively using Makefile:
```bash
make build
```

---

## 🚀 Run

To start the production API server and frontend client application:

```bash
# Start backend server
npm run start
```

For concurrent local development mode with hot-reloading:
```bash
# Start development servers (Server on port 5000, Client on port 3000)
npm run dev
```

### Docker Containerized Execution
```bash
# Build Docker image
docker build -t medhaiqerp:latest .

# Run Docker container
docker run -p 5000:5000 -p 3000:3000 medhaiqerp:latest
```

---

## 🧪 Testing

Execute the automated test suite covering 7 core subsystems (Auth, SIS, Academics, Finance, Library, HR, Transport):

```bash
npm run test
```

Expected Output:
```
===========================================================
 MedhaIQ ERP - Master Automated Verification Test Suite
===========================================================

[TEST 1/7] Testing JWT Token Signing & Verification...
  ✓ PASSED: JWT Token signed with HMAC-SHA256 & payload verified.

[TEST 2/7] Testing Security PBKDF2 Password Hashing & Salting...
  ✓ PASSED: Password hashed with 16-byte random salt & verified.

[TEST 3/7] Testing Student SIS Admission Number Generator...
  ✓ PASSED: Admission number generated successfully (STU262421).

[TEST 4/7] Testing Academic Letter Grade Scale...
  ✓ PASSED: Score 93% mapped to A+ (4.0 GP).

[TEST 5/7] Testing Weighted GPA Calculator...
  ✓ PASSED: Weighted GPA computed (3.61).

[TEST 6/7] Testing Library Overdue Fine Calculator...
  ✓ PASSED: Library fine computed (6 days @ $5/day = $30).

[TEST 7/7] Testing Staff HR Payroll Engine...
  ✓ PASSED: Payroll Net Salary computed ($7400).

===========================================================
 🎉 ALL 7 TEST SUITES EXECUTED AND PASSED SUCCESSFULLY!
===========================================================
```

---

## 💡 Usage

### Accessing Module Dashboards
- **Executive Dashboard**: `http://localhost:3000` (KPIs, revenue curves, enrollment analytics)
- **Student SIS**: `http://localhost:3000/students` (Admissions, student records, guardians)
- **Academic Governance**: `http://localhost:3000/academics` (Course catalog, GPA, gradebook)
- **Finance & Invoicing**: `http://localhost:3000/finance` (Student fee invoices, receipts, ledgers)
- **Staff HR & Payroll**: `http://localhost:3000/hr` (Employee records, payslips, leaves)
- **Library Catalog**: `http://localhost:3000/library` (OPAC catalog, circulation, barcode scanner)
- **Hostel & Transport**: `http://localhost:3000/hostel` (Room allocations, route geofencing)

---

## 📁 Repository Directory Structure

```
medhaiqerp/
├── .git/                       # Full Git Commit & Merge History
├── .env.example                # Environment variables template
├── .gitignore                  # Ignored build artifacts
├── README.md                   # Installation, Build, Run, Usage documentation
├── package.json                # Root package manifest
├── package-lock.json           # Root lockfile
├── Dockerfile                  # Container build instructions
├── Makefile                    # Make build targets
├── client/                     # React 18 Frontend
│   ├── package.json
│   ├── package-lock.json
│   ├── src/
├── server/                     # Express Backend Service
│   ├── package.json
│   ├── package-lock.json
│   ├── src/
├── tests/                      # Automated Verification Test Suite
│   └── testRunner.js
└── docs/                       # Architecture Guides & API Specs
```
