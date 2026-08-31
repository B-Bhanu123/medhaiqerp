export interface TaxReceipt {
  receiptNo: string;
  studentId: string;
  taxableAmount: number;
  exemptAmount: number;
  taxYear: number;
  issuedAt: Date;
}

export class TaxReceiptEngine {
  public static generateReceipt(studentId: string, totalPaid: number, tuitionPortionRatio = 0.85): TaxReceipt {
    const taxableAmount = Math.round(totalPaid * tuitionPortionRatio * 100) / 100;
    const exemptAmount = Math.round((totalPaid - taxableAmount) * 100) / 100;

    return {
      receiptNo: `TAX-${Date.now()}`,
      studentId,
      taxableAmount,
      exemptAmount,
      taxYear: new Date().getFullYear(),
      issuedAt: new Date()
    };
  }
}
