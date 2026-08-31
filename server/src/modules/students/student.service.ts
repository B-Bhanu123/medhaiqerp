
import { Student, StudentStatus, Gender } from '../../types';
import { Security } from '../../core/security';
import { NotFoundError, BadRequestError } from '../../core/errors';

export class StudentService {
  private static students: Map<string, Student> = new Map();

  public static async createStudent(data: Omit<Student, 'id' | 'admissionNo' | 'status' | 'createdAt' | 'updatedAt'>): Promise<Student> {
    const admissionNo = Security.generateAdmissionNumber();
    const newStudent: Student = {
      ...data,
      id: Security.generateRandomToken(16),
      admissionNo,
      status: StudentStatus.ACTIVE,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.students.set(newStudent.id, newStudent);
    return newStudent;
  }

  public static async getStudentById(id: string): Promise<Student> {
    const student = this.students.get(id);
    if (!student) throw new NotFoundError(`Student with ID ${id} not found`);
    return student;
  }

  public static async listStudents(filters?: { programId?: string; status?: StudentStatus; search?: string }): Promise<Student[]> {
    let result = Array.from(this.students.values());
    if (filters) {
      if (filters.programId) {
        result = result.filter(s => s.programId === filters.programId);
      }
      if (filters.status) {
        result = result.filter(s => s.status === filters.status);
      }
      if (filters.search) {
        const query = filters.search.toLowerCase();
        result = result.filter(s => s.firstName.toLowerCase().includes(query) || s.lastName.toLowerCase().includes(query) || s.admissionNo.toLowerCase().includes(query));
      }
    }
    return result;
  }

  public static async updateStudent(id: string, updates: Partial<Student>): Promise<Student> {
    const existing = await this.getStudentById(id);
    const updated = { ...existing, ...updates, updatedAt: new Date() };
    this.students.set(id, updated);
    return updated;
  }
}
