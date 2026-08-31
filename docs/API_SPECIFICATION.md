# MedhaIQ ERP - API Specification v1.0.0

## Base URL
`http://localhost:5000/api/v1`

## Authentication
All protected endpoints require a HTTP Bearer Token in the Authorization header:
```http
Authorization: Bearer <your_jwt_token>
```

---

## Subsystem 1: Authentication & Authorization

### 1. Register User
- **POST** `/auth/register`
- **Access**: Public
- **Request Body**:
```json
{
  "email": "user@medhaiq.edu",
  "username": "user123",
  "password": "Password123!",
  "firstName": "John",
  "lastName": "Doe",
  "role": "FACULTY"
}
```
- **Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "usr_948201",
      "email": "user@medhaiq.edu",
      "role": "FACULTY"
    },
    "token": "eyJhbGciOiJIUzI1Ni..."
  }
}
```

### 2. User Login
- **POST** `/auth/login`
- **Access**: Public
- **Request Body**:
```json
{
  "email": "user@medhaiq.edu",
  "password": "Password123!"
}
```

---

## Subsystem 2: Student Information System (SIS)

### 1. List Students
- **GET** `/students`
- **Access**: Authenticated (All Roles)
- **Query Parameters**:
  - `programId` (optional): Filter by program
  - `status` (optional): ACTIVE, GRADUATED, SUSPENDED
  - `search` (optional): Search query

### 2. Create Student Admission
- **POST** `/students`
- **Access**: SUPER_ADMIN, ACADEMIC_DEAN
- **Request Body**:
```json
{
  "firstName": "Alex",
  "lastName": "Morgan",
  "gender": "FEMALE",
  "dateOfBirth": "2003-05-15",
  "email": "alex.m@student.medhaiq.edu",
  "address": "124 Innovation Way",
  "admissionDate": "2024-08-01",
  "academicYear": "2024-2025",
  "programId": "PROG-BSCS",
  "currentSemester": 1
}
```

---

## Subsystem 3: Academics & Grading Engine

### 1. Add Department
- **POST** `/academics/departments`

### 2. Add Course
- **POST** `/academics/courses`

### 3. Record Student Grade
- **POST** `/academics/grades`

---

## Subsystem 4: Finance & Fee Invoicing

### 1. Create Invoice
- **POST** `/finance/invoices`

### 2. Record Payment Transaction
- **POST** `/finance/payments`

---

## Subsystem 5: Library & Circulation

### 1. Issue Book
- **POST** `/library/loans/issue`

### 2. Return Book
- **POST** `/library/loans/return`
