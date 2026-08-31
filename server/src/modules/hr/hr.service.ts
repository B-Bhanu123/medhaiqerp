
import { Employee, PayrollRecord, EmployeeType } from '../../types';
import { Security } from '../../core/security';
import { ERPMath } from '../../core/calc';
import { NotFoundError } from '../../core/errors';

export class HRService {
  private static employees: Map<string, Employee> = new Map();
  private static payrolls: Map<string, PayrollRecord> = new Map();

  public static async createEmployee(data: Omit<Employee, 'id' | 'status'>): Promise<Employee> {
    const emp: Employee = {
      ...data,
      id: Security.generateRandomToken(16),
      status: 'ACTIVE'
    };
    this.employees.set(emp.id, emp);
    return emp;
  }

  public static async generatePayroll(employeeId: string, month: number, year: number): Promise<PayrollRecord> {
    const emp = this.employees.get(employeeId);
    if (!emp) throw new NotFoundError('Employee not found');

    const hra = emp.baseSalary * 0.4;
    const da = emp.baseSalary * 0.2;
    const special = emp.baseSalary * 0.1;
    const pf = emp.baseSalary * 0.12;
    const tax = emp.baseSalary * 0.1;
    const other = 0;

    const { gross, totalDeductions, net } = ERPMath.calculateNetSalary(emp.baseSalary, { hra, da, special }, { pf, tax, other });

    const payslip: PayrollRecord = {
      id: Security.generateRandomToken(16),
      payslipNo: `PAY-${year}${month}-${emp.employeeCode}`,
      employeeId,
      month,
      year,
      baseSalary: emp.baseSalary,
      hraAllowance: hra,
      daAllowance: da,
      specialAllowance: special,
      grossSalary: gross,
      pfDeduction: pf,
      taxDeduction: tax,
      otherDeduction: other,
      netSalary: net,
      processedDate: new Date(),
      status: 'APPROVED'
    };

    this.payrolls.set(payslip.id, payslip);
    return payslip;
  }
}
