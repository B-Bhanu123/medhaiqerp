
export enum InvoiceStatus {
  DRAFT = 'DRAFT',
  ISSUED = 'ISSUED',
  PARTIALLY_PAID = 'PARTIALLY_PAID',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE',
  CANCELLED = 'CANCELLED'
}

export enum PaymentMethod {
  CASH = 'CASH',
  CREDIT_CARD = 'CREDIT_CARD',
  BANK_TRANSFER = 'BANK_TRANSFER',
  ONLINE_GATEWAY = 'ONLINE_GATEWAY',
  CHEQUE = 'CHEQUE'
}

export interface FeeCategory {
  id: string;
  name: string;
  code: string;
  description?: string;
  isRefundable: boolean;
}

export interface FeeStructureItem {
  feeCategoryId: string;
  amount: number;
  dueDate: Date;
}

export interface FeeStructure {
  id: string;
  name: string;
  academicYear: string;
  programId: string;
  semester: number;
  items: FeeStructureItem[];
  totalAmount: number;
  createdAt: Date;
}

export interface StudentInvoice {
  id: string;
  invoiceNo: string;
  studentId: string;
  feeStructureId: string;
  issueDate: Date;
  dueDate: Date;
  subtotal: number;
  discountAmount: number;
  fineAmount: number;
  totalAmount: number;
  paidAmount: number;
  balanceAmount: number;
  status: InvoiceStatus;
  createdAt: Date;
}

export interface PaymentTransaction {
  id: string;
  transactionNo: string;
  invoiceId: string;
  studentId: string;
  amountPaid: number;
  paymentMethod: PaymentMethod;
  referenceNo?: string;
  paymentDate: Date;
  collectedById: string;
  remarks?: string;
}
