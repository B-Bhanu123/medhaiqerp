
import { LibraryService } from '../server/src/modules/library/library.service';
import { ERPMath } from '../server/src/core/calc';

export async function runLibraryTests() {
  console.log('
========================================');
  console.log('TEST SUITE 5: Library Circulation & Fine Engine');
  console.log('========================================');

  // Test 1: Book Creation & Circulation
  const book = await LibraryService.addBook({
    isbn: '978-0132350884',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    publisher: 'Prentice Hall',
    category: 'Software Engineering',
    totalCopies: 5,
    shelfLocation: 'SE-B2-01',
    price: 50
  });

  const loan = await LibraryService.issueBook(book.id, 'STU-101', 'STUDENT');
  if (book.availableCopies !== 4) throw new Error('Library Test Failed: Book inventory count not decremented');
  console.log('✓ Test 5.1 Passed: Book Checkout & Inventory Tracking');

  // Test 2: Overdue Fine Engine
  const fine = ERPMath.calculateOverdueFine(4, 5); // 4 days overdue @ $5/day
  if (fine !== 20) throw new Error('Library Test Failed: Overdue fine calculation mismatch');
  console.log('✓ Test 5.2 Passed: Overdue Fine Engine (4 days @ $5/day = $20)');
}
