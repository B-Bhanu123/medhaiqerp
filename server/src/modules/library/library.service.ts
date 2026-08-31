
import { Book, BookLoan } from '../../types';
import { Security } from '../../core/security';
import { ERPMath } from '../../core/calc';
import { NotFoundError, BadRequestError } from '../../core/errors';

export class LibraryService {
  private static books: Map<string, Book> = new Map();
  private static loans: Map<string, BookLoan> = new Map();

  public static async addBook(bookData: Omit<Book, 'id' | 'availableCopies'>): Promise<Book> {
    const book: Book = {
      ...bookData,
      id: Security.generateRandomToken(16),
      availableCopies: bookData.totalCopies
    };
    this.books.set(book.id, book);
    return book;
  }

  public static async issueBook(bookId: string, borrowerId: string, borrowerType: 'STUDENT' | 'FACULTY'): Promise<BookLoan> {
    const book = this.books.get(bookId);
    if (!book) throw new NotFoundError('Book not found');
    if (book.availableCopies <= 0) throw new BadRequestError('No available copies of this book');

    const issueDate = new Date();
    const dueDate = new Date();
    dueDate.setDate(issueDate.getDate() + 14); // 14 days loan period

    const loan: BookLoan = {
      id: Security.generateRandomToken(16),
      loanNo: `LOAN-${Date.now()}`,
      bookId,
      borrowerId,
      borrowerType,
      issueDate,
      dueDate,
      fineAmount: 0,
      status: 'ISSUED'
    };

    book.availableCopies -= 1;
    this.loans.set(loan.id, loan);
    return loan;
  }

  public static async returnBook(loanId: string): Promise<BookLoan> {
    const loan = this.loans.get(loanId);
    if (!loan) throw new NotFoundError('Loan record not found');
    if (loan.status === 'RETURNED') throw new BadRequestError('Book has already been returned');

    const returnDate = new Date();
    loan.returnDate = returnDate;

    // Calculate overdue fine if returned past due date
    const diffTime = returnDate.getTime() - loan.dueDate.getTime();
    const daysOverdue = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    loan.fineAmount = ERPMath.calculateOverdueFine(daysOverdue);

    loan.status = 'RETURNED';

    const book = this.books.get(loan.bookId);
    if (book) {
      book.availableCopies += 1;
    }

    return loan;
  }
}
