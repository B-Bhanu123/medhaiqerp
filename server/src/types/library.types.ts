
export interface Book {
  id: string;
  isbn: string;
  title: string;
  author: string;
  publisher: string;
  category: string;
  edition?: string;
  totalCopies: number;
  availableCopies: number;
  shelfLocation: string;
  price: number;
}

export interface BookLoan {
  id: string;
  loanNo: string;
  bookId: string;
  borrowerId: string;
  borrowerType: 'STUDENT' | 'FACULTY';
  issueDate: Date;
  dueDate: Date;
  returnDate?: Date;
  fineAmount: number;
  status: 'ISSUED' | 'RETURNED' | 'OVERDUE' | 'LOST';
}
