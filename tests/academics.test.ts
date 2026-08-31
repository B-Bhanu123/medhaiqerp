
import { AcademicService } from '../server/src/modules/academics/academic.service';
import { ERPMath } from '../server/src/core/calc';

export async function runAcademicTests() {
  console.log('
========================================');
  console.log('TEST SUITE 3: Academic Engine & Grade Calculation');
  console.log('========================================');

  // Test 1: Grade Scale Calculation
  const gradeA = ERPMath.calculateLetterGrade(92);
  if (gradeA.letter !== 'A+' || gradeA.point !== 4.0) throw new Error('Academic Test Failed: Grade scale incorrect');
  console.log('✓ Test 3.1 Passed: Letter Grade & Point Computation (92% -> A+, 4.0)');

  // Test 2: GPA Calculation
  const gpa = ERPMath.calculateGPA([
    { credits: 4, gradePoint: 4.0 },
    { credits: 3, gradePoint: 3.0 },
    { credits: 3, gradePoint: 3.7 }
  ]);

  if (gpa !== 3.61) throw new Error(`Academic Test Failed: Weighted GPA mismatch expected 3.61 got ${gpa}`);
  console.log(`✓ Test 3.2 Passed: Weighted GPA Calculation (${gpa})`);
}
