
import { FinanceService } from '../server/src/modules/finance/finance.service';
import { PaymentMethod, InvoiceStatus } from '../server/src/types';

export async function runFinanceTests() {
  console.log('
========================================');
  console.log('TEST SUITE 4: Financial Operations & Fee Ledger');
  console.log('========================================');

  // Test 1: Invoice Creation
  const invoice = await FinanceService.createInvoice({
    studentId: 'STU-101',
    feeStructureId: 'FEE-SEM1',
    dueDate: new Date('2024-12-31'),
    subtotal: 5000,
    discountAmount: 500
  });

  if (invoice.totalAmount !== 4500) throw new Error('Finance Test Failed: Total invoice amount calculation error');
  console.log(`✓ Test 4.1 Passed: Student Invoice Created (${invoice.invoiceNo}) - Net $4,500`);

  // Test 2: Payment Processing
  const txn = await FinanceService.recordPayment({
    invoiceId: invoice.id,
    studentId: 'STU-101',
    amountPaid: 4500,
    paymentMethod: PaymentMethod.ONLINE_GATEWAY,
    collectedById: 'USER-FINANCE-01'
  });

  if (invoice.status !== InvoiceStatus.PAID || invoice.balanceAmount !== 0) {
    throw new Error('Finance Test Failed: Payment ledger update failed');
  }
  console.log('✓ Test 4.2 Passed: Invoice Fully Paid & Ledger Updated');
}
