
export interface Department {
  id: string;
  code: string;
  name: string;
  headOfDepartmentId?: string;
  buildingLocation?: string;
  contactEmail: string;
  createdAt: Date;
}

export interface Program {
  id: string;
  code: string;
  name: string;
  departmentId: string;
  durationYears: number;
  totalSemesters: number;
  degreeType: 'BACHELOR' | 'MASTER' | 'DIPLOMA' | 'PHD';
  createdAt: Date;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  departmentId: string;
  credits: number;
  lectureHours: number;
  labHours: number;
  isElective: boolean;
  syllabusOverview: string;
  createdAt: Date;
}

export interface ClassSchedule {
  id: string;
  courseId: string;
  facultyId: string;
  section: string;
  dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY';
  startTime: string;
  endTime: string;
  roomNo: string;
  academicTerm: string;
}

export interface Grade {
  id: string;
  studentId: string;
  courseId: string;
  academicTerm: string;
  internalScore: number;
  midtermScore: number;
  finalExamScore: number;
  totalScore: number;
  letterGrade: 'A+' | 'A' | 'B+' | 'B' | 'C' | 'D' | 'F';
  gradePoint: number;
  remarks?: string;
  recordedAt: Date;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  courseId: string;
  date: Date;
  status: 'PRESENT' | 'ABSENT' | 'LATE' | 'EXCUSED';
  remarks?: string;
}
