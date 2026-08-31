
export enum EmployeeType {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT',
  ADJUNCT = 'ADJUNCT'
}

export enum LeaveStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED'
}

export interface Employee {
  id: string;
  employeeCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  departmentId: string;
  designation: string;
  employeeType: EmployeeType;
  joiningDate: Date;
  baseSalary: number;
  bankAccountNo: string;
  bankIfsc: string;
  panNumber?: string;
  pfNumber?: string;
  status: 'ACTIVE' | 'ON_LEAVE' | 'TERMINATED' | 'RETIRED';
}

export interface PayrollRecord {
  id: string;
  payslipNo: string;
  employeeId: string;
  month: number;
  year: number;
  baseSalary: number;
  hraAllowance: number;
  daAllowance: number;
  specialAllowance: number;
  grossSalary: number;
  pfDeduction: number;
  taxDeduction: number;
  otherDeduction: number;
  netSalary: number;
  processedDate: Date;
  status: 'DRAFT' | 'APPROVED' | 'DISBURSED';
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  leaveType: 'CASUAL' | 'SICK' | 'MATERNITY' | 'EARNED' | 'UNPAID';
  startDate: Date;
  endDate: Date;
  totalDays: number;
  reason: string;
  status: LeaveStatus;
  approvedById?: string;
}
