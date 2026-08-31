
import { AuthService } from '../server/src/modules/auth/auth.service';
import { UserRole } from '../server/src/types';

export async function runAuthTests() {
  console.log('
========================================');
  console.log('TEST SUITE 1: Authentication & Authorization');
  console.log('========================================');

  // Test 1: User Registration
  const { user, token } = await AuthService.register({
    email: 'test.dean@medhaiq.edu',
    username: 'testdean',
    password: 'SecurePassword123!',
    firstName: 'Elena',
    lastName: 'Rostova',
    role: UserRole.ACADEMIC_DEAN
  });

  if (!user.id || !token) throw new Error('Auth Test Failed: User registration failed');
  console.log('✓ Test 1.1 Passed: User Registration & JWT Token Signing');

  // Test 2: User Login
  const loginRes = await AuthService.login({
    email: 'test.dean@medhaiq.edu',
    password: 'SecurePassword123!'
  });

  if (loginRes.user.email !== 'test.dean@medhaiq.edu') throw new Error('Auth Test Failed: Login verification failed');
  console.log('✓ Test 1.2 Passed: User Credentials Verification & Login');
}
