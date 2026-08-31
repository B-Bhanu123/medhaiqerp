
import { StudentService } from '../server/src/modules/students/student.service';
import { Gender } from '../server/src/types';

export async function runStudentTests() {
  console.log('
========================================');
  console.log('TEST SUITE 2: Student Information System (SIS)');
  console.log('========================================');

  // Test 1: Student Creation
  const student = await StudentService.createStudent({
    firstName: 'Daniel',
    lastName: 'Craig',
    gender: Gender.MALE,
    dateOfBirth: new Date('2002-11-20'),
    email: 'daniel.craig@student.medhaiq.edu',
    address: '42 Baker Street',
    admissionDate: new Date(),
    academicYear: '2024-2025',
    programId: 'PROG-CS',
    currentSemester: 1
  });

  if (!student.admissionNo.startsWith('STU')) throw new Error('Student Test Failed: Admission number prefix invalid');
  console.log(`✓ Test 2.1 Passed: Student Created with Admission No ${student.admissionNo}`);

  // Test 2: Student Lookup
  const found = await StudentService.getStudentById(student.id);
  if (found.firstName !== 'Daniel') throw new Error('Student Test Failed: Student retrieval mismatch');
  console.log('✓ Test 2.2 Passed: Student Retrieval by ID');
}
