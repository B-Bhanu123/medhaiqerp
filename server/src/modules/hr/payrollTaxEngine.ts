export class PayrollTaxEngine {
  public static calculateIncomeTax(annualGrossSalary: number): number {
    if (annualGrossSalary <= 300000) return 0;
    if (annualGrossSalary <= 600000) return (annualGrossSalary - 300000) * 0.05;
    if (annualGrossSalary <= 900000) return 15000 + (annualGrossSalary - 600000) * 0.10;
    if (annualGrossSalary <= 1200000) return 45000 + (annualGrossSalary - 900000) * 0.15;
    return 90000 + (annualGrossSalary - 1200000) * 0.20;
  }
}
