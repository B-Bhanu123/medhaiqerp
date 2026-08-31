
import { Course, Department, Grade, ClassSchedule } from '../../types';
import { ERPMath } from '../../core/calc';
import { Security } from '../../core/security';
import { NotFoundError } from '../../core/errors';

export class AcademicService {
  private static departments: Map<string, Department> = new Map();
  private static courses: Map<string, Course> = new Map();
  private static grades: Map<string, Grade> = new Map();

  public static async addDepartment(dep: Omit<Department, 'id' | 'createdAt'>): Promise<Department> {
    const newDep: Department = { ...dep, id: Security.generateRandomToken(16), createdAt: new Date() };
    this.departments.set(newDep.id, newDep);
    return newDep;
  }

  public static async addCourse(course: Omit<Course, 'id' | 'createdAt'>): Promise<Course> {
    const newCourse: Course = { ...course, id: Security.generateRandomToken(16), createdAt: new Date() };
    this.courses.set(newCourse.id, newCourse);
    return newCourse;
  }

  public static async recordGrade(gradeData: { studentId: string; courseId: string; academicTerm: string; internalScore: number; midtermScore: number; finalExamScore: number }): Promise<Grade> {
    const course = this.courses.get(gradeData.courseId);
    const totalScore = gradeData.internalScore + gradeData.midtermScore + gradeData.finalExamScore;
    const { letter, point } = ERPMath.calculateLetterGrade(totalScore);

    const grade: Grade = {
      id: Security.generateRandomToken(16),
      ...gradeData,
      totalScore,
      letterGrade: letter,
      gradePoint: point,
      recordedAt: new Date()
    };

    this.grades.set(grade.id, grade);
    return grade;
  }

  public static async calculateStudentGPA(studentId: string): Promise<number> {
    const studentGrades = Array.from(this.grades.values()).filter(g => g.studentId === studentId);
    const gradeItems = studentGrades.map(g => {
      const course = this.courses.get(g.courseId);
      return { credits: course ? course.credits : 3, gradePoint: g.gradePoint };
    });
    return ERPMath.calculateGPA(gradeItems);
  }
}
