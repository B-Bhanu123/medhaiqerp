
import { FeeStructure, StudentInvoice, InvoiceStatus, PaymentTransaction } from '../../types';
import { Security } from '../../core/security';
import { NotFoundError, BadRequestError } from '../../core/errors';

export class FinanceService {
  private static invoices: Map<string, StudentInvoice> = new Map();
  private static transactions: Map<string, PaymentTransaction> = new Map();

  public static async createInvoice(data: { studentId: string; feeStructureId: string; dueDate: Date; subtotal: number; discountAmount?: number }): Promise<StudentInvoice> {
    const invoiceNo = Security.generateInvoiceNumber();
    const discount = data.discountAmount || 0;
    const total = data.subtotal - discount;

    const invoice: StudentInvoice = {
      id: Security.generateRandomToken(16),
      invoiceNo,
      studentId: data.studentId,
      feeStructureId: data.feeStructureId,
      issueDate: new Date(),
      dueDate: data.dueDate,
      subtotal: data.subtotal,
      discountAmount: discount,
      fineAmount: 0,
      totalAmount: total,
      paidAmount: 0,
      balanceAmount: total,
      status: InvoiceStatus.ISSUED,
      createdAt: new Date()
    };

    this.invoices.set(invoice.id, invoice);
    return invoice;
  }

  public static async recordPayment(paymentData: Omit<PaymentTransaction, 'id' | 'transactionNo' | 'paymentDate'>): Promise<PaymentTransaction> {
    const invoice = this.invoices.get(paymentData.invoiceId);
    if (!invoice) throw new NotFoundError('Invoice not found');

    if (paymentData.amountPaid <= 0) throw new BadRequestError('Payment amount must be greater than zero');

    const transaction: PaymentTransaction = {
      ...paymentData,
      id: Security.generateRandomToken(16),
      transactionNo: `TXN-${Date.now()}`,
      paymentDate: new Date()
    };

    invoice.paidAmount += paymentData.amountPaid;
    invoice.balanceAmount = Math.max(0, invoice.totalAmount - invoice.paidAmount);

    if (invoice.balanceAmount === 0) {
      invoice.status = InvoiceStatus.PAID;
    } else {
      invoice.status = InvoiceStatus.PARTIALLY_PAID;
    }

    this.transactions.set(transaction.id, transaction);
    return transaction;
  }
}
