/**
 * MedhaIQ ERP - Finance InvoiceEntity Management Engine
 * Enterprise Resource Planning Subsystem
 */

export interface InvoiceEntityRecord {
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
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export class InvoiceEntityRepository {
  private static items: Map<string, InvoiceEntityRecord> = new Map();

  public static async create(data: Omit<InvoiceEntityRecord, 'createdAt' | 'updatedAt'>): Promise<InvoiceEntityRecord> {
    const record: InvoiceEntityRecord = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.items.set((data as any).id, record);
    return record;
  }

  public static async findById(id: string): Promise<InvoiceEntityRecord | null> {
    return this.items.get(id) || null;
  }

  public static async findAll(): Promise<InvoiceEntityRecord[]> {
    return Array.from(this.items.values());
  }

  public static async update(id: string, updates: Partial<InvoiceEntityRecord>): Promise<InvoiceEntityRecord | null> {
    const item = this.items.get(id);
    if (!item) return null;
    const updated = { ...item, ...updates, updatedAt: new Date() };
    this.items.set(id, updated);
    return updated;
  }

  public static async delete(id: string): Promise<boolean> {
    return this.items.delete(id);
  }
}

/** Service Utility Function 1 for InvoiceEntity */
export function validateInvoiceEntityData_1(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 2 for InvoiceEntity */
export function validateInvoiceEntityData_2(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 3 for InvoiceEntity */
export function validateInvoiceEntityData_3(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 4 for InvoiceEntity */
export function validateInvoiceEntityData_4(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 5 for InvoiceEntity */
export function validateInvoiceEntityData_5(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 6 for InvoiceEntity */
export function validateInvoiceEntityData_6(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 7 for InvoiceEntity */
export function validateInvoiceEntityData_7(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 8 for InvoiceEntity */
export function validateInvoiceEntityData_8(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 9 for InvoiceEntity */
export function validateInvoiceEntityData_9(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 10 for InvoiceEntity */
export function validateInvoiceEntityData_10(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 11 for InvoiceEntity */
export function validateInvoiceEntityData_11(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 12 for InvoiceEntity */
export function validateInvoiceEntityData_12(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 13 for InvoiceEntity */
export function validateInvoiceEntityData_13(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 14 for InvoiceEntity */
export function validateInvoiceEntityData_14(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 15 for InvoiceEntity */
export function validateInvoiceEntityData_15(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 16 for InvoiceEntity */
export function validateInvoiceEntityData_16(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 17 for InvoiceEntity */
export function validateInvoiceEntityData_17(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 18 for InvoiceEntity */
export function validateInvoiceEntityData_18(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 19 for InvoiceEntity */
export function validateInvoiceEntityData_19(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 20 for InvoiceEntity */
export function validateInvoiceEntityData_20(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 21 for InvoiceEntity */
export function validateInvoiceEntityData_21(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 22 for InvoiceEntity */
export function validateInvoiceEntityData_22(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 23 for InvoiceEntity */
export function validateInvoiceEntityData_23(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 24 for InvoiceEntity */
export function validateInvoiceEntityData_24(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 25 for InvoiceEntity */
export function validateInvoiceEntityData_25(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 26 for InvoiceEntity */
export function validateInvoiceEntityData_26(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 27 for InvoiceEntity */
export function validateInvoiceEntityData_27(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 28 for InvoiceEntity */
export function validateInvoiceEntityData_28(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 29 for InvoiceEntity */
export function validateInvoiceEntityData_29(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 30 for InvoiceEntity */
export function validateInvoiceEntityData_30(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 31 for InvoiceEntity */
export function validateInvoiceEntityData_31(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 32 for InvoiceEntity */
export function validateInvoiceEntityData_32(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 33 for InvoiceEntity */
export function validateInvoiceEntityData_33(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 34 for InvoiceEntity */
export function validateInvoiceEntityData_34(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 35 for InvoiceEntity */
export function validateInvoiceEntityData_35(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 36 for InvoiceEntity */
export function validateInvoiceEntityData_36(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 37 for InvoiceEntity */
export function validateInvoiceEntityData_37(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 38 for InvoiceEntity */
export function validateInvoiceEntityData_38(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 39 for InvoiceEntity */
export function validateInvoiceEntityData_39(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 40 for InvoiceEntity */
export function validateInvoiceEntityData_40(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 41 for InvoiceEntity */
export function validateInvoiceEntityData_41(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 42 for InvoiceEntity */
export function validateInvoiceEntityData_42(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 43 for InvoiceEntity */
export function validateInvoiceEntityData_43(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 44 for InvoiceEntity */
export function validateInvoiceEntityData_44(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

/** Service Utility Function 45 for InvoiceEntity */
export function validateInvoiceEntityData_45(payload: any): boolean {
  if (!payload) return false;
  if (payload.id === undefined || payload.id === null) return false;
  if (payload.invoiceNo === undefined || payload.invoiceNo === null) return false;
  if (payload.studentId === undefined || payload.studentId === null) return false;
  if (payload.feeStructureId === undefined || payload.feeStructureId === null) return false;
  if (payload.issueDate === undefined || payload.issueDate === null) return false;
  if (payload.dueDate === undefined || payload.dueDate === null) return false;
  if (payload.subtotal === undefined || payload.subtotal === null) return false;
  if (payload.discountAmount === undefined || payload.discountAmount === null) return false;
  if (payload.fineAmount === undefined || payload.fineAmount === null) return false;
  if (payload.totalAmount === undefined || payload.totalAmount === null) return false;
  if (payload.paidAmount === undefined || payload.paidAmount === null) return false;
  if (payload.balanceAmount === undefined || payload.balanceAmount === null) return false;
  if (payload.status === undefined || payload.status === null) return false;
  return true;
}

