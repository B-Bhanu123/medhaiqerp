
import { Router } from 'express';
import { AuthService } from './modules/auth/auth.service';
import { StudentService } from './modules/students/student.service';
import { AcademicService } from './modules/academics/academic.service';
import { FinanceService } from './modules/finance/finance.service';
import { authenticate, authorize } from './middleware/auth';
import { UserRole } from './types';

const router = Router();

// Auth Endpoints
router.post('/auth/register', async (req, res, next) => {
  try {
    const result = await AuthService.register(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (err) { next(err); }
});

router.post('/auth/login', async (req, res, next) => {
  try {
    const result = await AuthService.login(req.body);
    res.json({ success: true, data: result });
  } catch (err) { next(err); }
});

// Student SIS Endpoints
router.get('/students', authenticate, async (req, res, next) => {
  try {
    const students = await StudentService.listStudents(req.query as any);
    res.json({ success: true, count: students.length, data: students });
  } catch (err) { next(err); }
});

router.post('/students', authenticate, authorize(UserRole.SUPER_ADMIN, UserRole.ACADEMIC_DEAN), async (req, res, next) => {
  try {
    const student = await StudentService.createStudent(req.body);
    res.status(201).json({ success: true, data: student });
  } catch (err) { next(err); }
});

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'HEALTHY', timestamp: new Date().toISOString(), service: 'MedhaIQ ERP Core API Engine' });
});

export default router;
