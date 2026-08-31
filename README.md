# MedhaIQ ERP - Next-Generation Enterprise Education Platform

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/B-Bhanu123/medhaiqerp)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v20-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-cyan)](https://react.dev/)
[![Codebase Size](https://img.shields.io/badge/LOC-50k%2B-purple)](https://github.com/B-Bhanu123/medhaiqerp)

MedhaIQ ERP is an enterprise-grade, comprehensive Education Resource Planning solution designed for universities, colleges, K-12 institutions, and educational conglomerates. It unifies administrative workflows, academic governance, student lifecycles, financial operations, HR & payroll, library circulation, campus housing, and transportation management into a cohesive, secure, real-time platform.

---

## 🏛 Architecture Overview

MedhaIQ ERP is architected as a modular, full-stack monorepo featuring a decoupled Node.js/TypeScript backend API service engine and a high-performance React/Vite frontend dashboard system.

```
                               ┌───────────────────────────┐
                               │   MedhaIQ ERP Web Client  │
                               │   (React + TypeScript)    │
                               └─────────────┬─────────────┘
                                             │ REST API / JWT
                               ┌─────────────▼─────────────┐
                               │  MedhaIQ Core API Engine  │
                               │   (Node.js + Express)     │
                               └─────────────┬─────────────┘
                                             │ Prisma ORM
  ┌───────────────┬───────────────┬──────────┴────┬───────────────┬───────────────┐
  │               │               │               │               │               │
┌─▼───────────┐ ┌─▼───────────┐ ┌─▼───────────┐ ┌─▼───────────┐ ┌─▼───────────┐ ┌─▼───────────┐
│ Student SIS │ │  Academics  │ │  Finance &  │ │  Staff HR & │ │  Library &    │ │ Hostel &     │
│ & Admission │ │ & Gradebook │ │ Fee Ledger  │ │  Payroll    │ │ Circulation   │ │ Transport    │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
```

---

## 🚀 Key Modules & Capabilities

### 1. 🎓 Student Information System (SIS) & Admissions
- **End-to-End Admission Workflow**: Digital application forms, document verification pipeline, entrance test management, and automated roll-number allocation.
- **360° Student Profile**: Comprehensive records including demographics, guardians, academic history, health records, disciplinary logs, and extracurricular achievements.
- **Dynamic Attendance Tracking**: Daily and subject-wise biometric / manual attendance logging with automated parent notification triggers.

### 2. 📚 Academic Management & Examinations
- **Curriculum & Syllabus Builder**: Departmental hierarchy, course catalog, credit structure, prerequisites, and syllabus distribution.
- **Algorithmic Timetable Generator**: Automated conflict-free schedule generation considering faculty load, room availability, and lab constraints.
- **Comprehensive Gradebook**: Support for GPA, CGPA, weighted grading scales (A+, A, B, C, F), continuous assessment, exam scheduling, and transcript generation.

### 3. 💳 Financial Operations & Fee Management
- **Customizable Fee Structures**: Multi-tier fee templates based on program, batch, quota, and category (Tuition, Hostel, Transport, Exam).
- **Automated Invoicing & Payments**: Bulk invoice generation, partial payment tracking, late fee calculation, online payment gateway integrations, and digital receipts.
- **Scholarship & Financial Aid**: Grant application tracking, merit-based discounts, and financial assistance auditing.
- **Double-Entry General Ledger**: Complete accounting trail, income/expense tracking, balance sheets, and audit-compliant reporting.

### 4. 👥 Human Resources & Payroll
- **Faculty & Staff Registry**: Departmental assignments, designations, qualification archives, and contract management.
- **Biometric Attendance & Leave Management**: Shift scheduling, leave request approval workflows, accrued leave tracking, and holiday calendars.
- **Automated Payroll Processing**: Salary structure configuration (Base, HRA, DA, Allowances, PF, Tax, Deductions), monthly payslip generation, and bank transfer exports.

### 5. 📖 Library Management System
- **OPAC Cataloging**: MARC21 compliant cataloging with ISBN lookup, barcode generation, multi-attribute search (Author, Publisher, Genre).
- **Circulation Desk**: Issue, return, renewal, reservation queues, lost book handling, and automated overdue fine calculations.

### 6. 🏢 Hostel & Dormitory Management
- **Facility Mapping**: Hostel block, floor, and room layout configuration (Single, Double, Suite, AC/Non-AC).
- **Allocation Engine**: Automated student room assignment based on preference, gender, course, and capacity constraints.
- **Gate Pass & Visitor Logs**: Digital leave request approvals, curfew tracking, and visitor records.

### 7. 🚌 Transport & Fleet Management
- **Route Optimization**: Route creation, bus stop mapping, distance calculation, and arrival estimation.
- **Vehicle & Driver Registry**: Fleet maintenance logs, fuel tracking, insurance renewal alerts, and driver licensing compliance.
- **Student Bus Pass Mapping**: Transport fee mapping, seat allocation, and route-wise boarding rosters.

### 8. 📊 Analytics, Reports & Audit Security
- **Role-Based Access Control (RBAC)**: Fine-grained permissions across 6 system roles (Super Admin, Academic Dean, Faculty, Finance Officer, Student, Parent).
- **Real-Time Dashboards**: Interactive metrics for executive leadership, enrollment statistics, revenue collection curves, and academic performance graphs.
- **Immutable Audit Trail**: Log of all security events, data updates, financial transactions, and configuration changes.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript 5.3, Vite, Tailwind CSS, Lucide React Icons |
| **Backend** | Node.js 20, Express, TypeScript, Prisma ORM, Zod, bcrypt, JWT |
| **Database** | PostgreSQL / SQLite (Development & Production compatible) |
| **Testing** | Vitest / Custom TypeScript Test Runner with 6+ Comprehensive Suites |
| **Tooling** | ESLint, Prettier, Git, GitHub Actions |

---

## ⚡ Quick Start

### Prerequisites
- Node.js `>= 20.0.0`
- npm `>= 10.0.0`

### Installation

1. **Clone Repository**:
   ```bash
   git clone https://github.com/B-Bhanu123/medhaiqerp.git
   cd medhaiqerp
   ```

2. **Install Dependencies**:
   ```bash
   npm run setup
   ```

3. **Configure Environment**:
   Copy `.env.example` to `.env` in both `server/` and `client/`:
   ```bash
   cp .env.example .env
   ```

4. **Initialize Database & Seed Sample Data**:
   ```bash
   npm run db:seed
   ```

5. **Start Development Servers**:
   ```bash
   npm run dev
   ```
   - API Server: `http://localhost:5000`
   - Web Client: `http://localhost:3000`

---

## 🧪 Running Automated Tests

Run the complete test suite covering Auth, SIS, Academics, Finance, Library, and Payroll:

```bash
npm run test
```

Expected output:
```
✓ Auth & Security Test Suite (8 tests passed)
✓ Student Information System Test Suite (10 tests passed)
✓ Academic & Grading Engine Test Suite (12 tests passed)
✓ Financial Ledger & Invoicing Test Suite (9 tests passed)
✓ Library Circulation Test Suite (7 tests passed)
✓ Payroll Engine Test Suite (8 tests passed)
------------------------------------------------
All 6 test suites passed successfully!
```

---

## 📁 Repository Directory Structure

```
medhaiqerp/
├── client/                     # React Frontend Application
│   ├── public/                 # Static Assets
│   ├── src/
│   │   ├── components/         # Reusable UI Library & Layouts
│   │   ├── pages/              # Module Page Views (18 Pages)
│   │   ├── context/            # React Application State Contexts
│   │   ├── hooks/              # Custom React Hooks
│   │   ├── styles/             # Global CSS & Design System
│   │   └── types/              # Client TypeScript Declarations
│   ├── package.json
│   └── vite.config.ts
├── server/                     # Node.js Express Backend Service
│   ├── prisma/                 # Database Schemas & Migrations
│   ├── src/
│   │   ├── config/             # Environment & App Configuration
│   │   ├── core/               # Logger, Security, PDF, Math Engines
│   │   ├── middleware/         # Auth, RBAC, Rate Limiting, Error Handlers
│   │   ├── modules/            # Subsystem Services & Controllers
│   │   ├── seeders/            # Comprehensive Mock Data Generator
│   │   ├── types/              # Server TypeScript Schemas
│   │   ├── app.ts              # Express App Definition
│   │   └── server.ts           # Server Listener Entrypoint
│   └── package.json
├── tests/                      # Automated Unit & Integration Tests
│   ├── auth.test.ts
│   ├── student.test.ts
│   ├── academics.test.ts
│   ├── finance.test.ts
│   ├── library.test.ts
│   ├── payroll.test.ts
│   └── testRunner.ts
├── docs/                       # Architecture & API Documentation
│   ├── API_SPECIFICATION.md
│   ├── ARCHITECTURE_GUIDE.md
│   ├── DATABASE_ERD.md
│   └── USER_MANUAL.md
├── package.json                # Monorepo Workspace Config
├── tsconfig.json               # Root TypeScript Config
└── README.md                   # System Documentation
```

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

© 2026 MedhaIQ ERP Systems. All rights reserved.
