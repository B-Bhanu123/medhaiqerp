const crypto = require('crypto');

// --- Standalone ERP Core Test Engine ---

class SecurityTestEngine {
  static hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
  }

  static verifyPassword(password, storedHash) {
    const [salt, originalHash] = storedHash.split(':');
    if (!salt || !originalHash) return false;
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return originalHash === hash;
  }

  static generateAdmissionNumber(prefix = 'STU') {
    const year = new Date().getFullYear().toString().substring(2);
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}${year}${randomDigits}`;
  }
}

class JwtTestEngine {
  static sign(payload, secret = 'medhaiq_jwt_secret_2026') {
    const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
    const fullPayload = Buffer.from(JSON.stringify({ ...payload, exp: Math.floor(Date.now()/1000) + 3600 })).toString('base64url');
    const signature = crypto.createHmac('sha256', secret).update(`${header}.${fullPayload}`).digest('base64url');
    return `${header}.${fullPayload}.${signature}`;
  }

  static verify(token, secret = 'medhaiq_jwt_secret_2026') {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [header, payload, signature] = parts;
    const expectedSig = crypto.createHmac('sha256', secret).update(`${header}.${payload}`).digest('base64url');
    if (signature !== expectedSig) return null;
    return JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
  }
}

class ERPMathTestEngine {
  static calculateGPA(grades) {
    if (!grades || grades.length === 0) return 0.0;
    const totalCredits = grades.reduce((acc, g) => acc + g.credits, 0);
    const totalPoints = grades.reduce((acc, g) => acc + (g.credits * g.gradePoint), 0);
    return Math.round((totalPoints / totalCredits) * 100) / 100;
  }

  static calculateLetterGrade(totalScore) {
    if (totalScore >= 90) return { letter: 'A+', point: 4.0 };
    if (totalScore >= 80) return { letter: 'A', point: 3.7 };
    if (totalScore >= 70) return { letter: 'B+', point: 3.3 };
    if (totalScore >= 60) return { letter: 'B', point: 3.0 };
    if (totalScore >= 50) return { letter: 'C', point: 2.0 };
    return { letter: 'F', point: 0.0 };
  }

  static calculateOverdueFine(daysOverdue, ratePerDay = 5) {
    if (daysOverdue <= 0) return 0;
    return daysOverdue * ratePerDay;
  }

  static calculateNetSalary(base, allowances, deductions) {
    const gross = base + allowances.hra + allowances.da + allowances.special;
    const totalDeductions = deductions.pf + deductions.tax;
    return gross - totalDeductions;
  }
}

async function runAllSuites() {
  console.log('===========================================================');
  console.log(' MedhaIQ ERP - Master Automated Verification Test Suite');
  console.log('===========================================================\n');

  // Test 1: JWT Signature verification
  console.log('[TEST 1/7] Testing JWT Token Signing & Verification...');
  const token = JwtTestEngine.sign({ userId: 'usr_1001', role: 'SUPER_ADMIN' });
  const verified = JwtTestEngine.verify(token);
  if (!verified || verified.role !== 'SUPER_ADMIN') throw new Error('JWT Verification Failed');
  console.log('  ✓ PASSED: JWT Token signed with HMAC-SHA256 & payload verified.');

  // Test 2: PBKDF2 Password Hashing
  console.log('\n[TEST 2/7] Testing Security PBKDF2 Password Hashing & Salting...');
  const hashed = SecurityTestEngine.hashPassword('AdminPass2026!');
  const isValid = SecurityTestEngine.verifyPassword('AdminPass2026!', hashed);
  if (!isValid) throw new Error('Password Hashing Verification Failed');
  console.log('  ✓ PASSED: Password hashed with 16-byte random salt & verified.');

  // Test 3: Admission Number Generation
  console.log('\n[TEST 3/7] Testing Student SIS Admission Number Generator...');
  const admNo = SecurityTestEngine.generateAdmissionNumber('STU');
  if (!admNo.startsWith('STU') || admNo.length < 8) throw new Error('Admission No Generator Failed');
  console.log(`  ✓ PASSED: Admission number generated successfully (${admNo}).`);

  // Test 4: Academic Grade Converter
  console.log('\n[TEST 4/7] Testing Academic Letter Grade Scale...');
  const grade = ERPMathTestEngine.calculateLetterGrade(93);
  if (grade.letter !== 'A+' || grade.point !== 4.0) throw new Error('Grade Conversion Failed');
  console.log('  ✓ PASSED: Score 93% mapped to A+ (4.0 GP).');

  // Test 5: Weighted GPA Calculation
  console.log('\n[TEST 5/7] Testing Weighted GPA Calculator...');
  const gpa = ERPMathTestEngine.calculateGPA([
    { credits: 4, gradePoint: 4.0 },
    { credits: 3, gradePoint: 3.7 },
    { credits: 3, gradePoint: 3.0 }
  ]);
  if (gpa !== 3.61) throw new Error(`GPA Mismatch expected 3.61 got ${gpa}`);
  console.log(`  ✓ PASSED: Weighted GPA computed (${gpa}).`);

  // Test 6: Overdue Library Fine Engine
  console.log('\n[TEST 6/7] Testing Library Overdue Fine Calculator...');
  const fine = ERPMathTestEngine.calculateOverdueFine(6, 5); // 6 days @ $5/day
  if (fine !== 30) throw new Error('Library Fine Calculation Failed');
  console.log('  ✓ PASSED: Library fine computed (6 days @ $5/day = $30).');

  // Test 7: Payroll Net Salary Calculation
  console.log('\n[TEST 7/7] Testing Staff HR Payroll Engine...');
  const netSalary = ERPMathTestEngine.calculateNetSalary(5000, { hra: 2000, da: 1000, special: 500 }, { pf: 600, tax: 500 });
  if (netSalary !== 7400) throw new Error(`Net Salary Mismatch expected 7400 got ${netSalary}`);
  console.log(`  ✓ PASSED: Payroll Net Salary computed ($${netSalary}).`);

  console.log('\n===========================================================');
  console.log(' 🎉 ALL 7 TEST SUITES EXECUTED AND PASSED SUCCESSFULLY!');
  console.log('===========================================================\n');
}

runAllSuites().catch(err => {
  console.error('❌ Test Execution Error:', err);
  process.exit(1);
});
