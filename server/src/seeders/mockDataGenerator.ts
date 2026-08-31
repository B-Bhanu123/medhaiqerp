
import { AuthService } from '../modules/auth/auth.service';
import { StudentService } from '../modules/students/student.service';
import { AcademicService } from '../modules/academics/academic.service';
import { FinanceService } from '../modules/finance/finance.service';
import { LibraryService } from '../modules/library/library.service';
import { HRService } from '../modules/hr/hr.service';
import { UserRole, Gender } from '../types';
import { Logger } from '../core/logger';

export async function seedInitialData() {
  Logger.info('Starting MedhaIQ ERP Database Seeder...');

  // 1. Seed Admin User
  await AuthService.register({
    email: 'admin@medhaiq.edu',
    username: 'superadmin',
    password: 'Password123!',
    firstName: 'System',
    lastName: 'Administrator',
    role: UserRole.SUPER_ADMIN
  });

  // 2. Seed Department & Course
  const csDept = await AcademicService.addDepartment({
    code: 'CS',
    name: 'Computer Science & Engineering',
    contactEmail: 'cs@medhaiq.edu',
    buildingLocation: 'Academic Block A'
  });

  const dsCourse = await AcademicService.addCourse({
    code: 'CS201',
    title: 'Data Structures & Algorithms',
    departmentId: csDept.id,
    credits: 4,
    lectureHours: 3,
    labHours: 2,
    isElective: false,
    syllabusOverview: 'Arrays, Linked Lists, Trees, Graphs, Sorting and Dynamic Programming.'
  });

  // 3. Seed Sample Student
  const student = await StudentService.createStudent({
    firstName: 'Alex',
    lastName: 'Morgan',
    gender: Gender.FEMALE,
    dateOfBirth: new Date('2003-05-15'),
    email: 'alex.morgan@student.medhaiq.edu',
    address: '124 Innovation Way, Tech City',
    admissionDate: new Date('2024-08-01'),
    academicYear: '2024-2025',
    programId: 'PROG-BSCS',
    currentSemester: 3
  });

  // 4. Seed Invoice
  await FinanceService.createInvoice({
    studentId: student.id,
    feeStructureId: 'FEE-2024-SEM3',
    dueDate: new Date('2024-09-30'),
    subtotal: 4500,
    discountAmount: 500
  });

  // 5. Seed Library Books
  await LibraryService.addBook({
    isbn: '978-0131103627',
    title: 'The C Programming Language',
    author: 'Brian Kernighan & Dennis Ritchie',
    publisher: 'Prentice Hall',
    category: 'Computer Science',
    totalCopies: 10,
    shelfLocation: 'CS-A1-04',
    price: 65.00
  });

  Logger.info('Database seeding completed successfully!');
}
