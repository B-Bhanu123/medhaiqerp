
import { runAuthTests } from './auth.test';
import { runStudentTests } from './student.test';
import { runAcademicTests } from './academics.test';
import { runFinanceTests } from './finance.test';
import { runLibraryTests } from './library.test';

async function main() {
  console.log('==================================================');
  console.log('MedhaIQ ERP - Automated Test Suite Master Execution');
  console.log('==================================================');

  try {
    await runAuthTests();
    await runStudentTests();
    await runAcademicTests();
    await runFinanceTests();
    await runLibraryTests();

    console.log('
--------------------------------------------------');
    console.log('🎉 ALL 5 TEST SUITES PASSED SUCCESSFULLY (10/10 Verification Checks)!');
    console.log('--------------------------------------------------
');
  } catch (error) {
    console.error('
❌ TEST SUITE FAILED:', error);
    process.exit(1);
  }
}

main();
