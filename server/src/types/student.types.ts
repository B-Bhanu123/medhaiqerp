
export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
}

export enum AdmissionStatus {
  APPLIED = 'APPLIED',
  UNDER_REVIEW = 'UNDER_REVIEW',
  SHORTLISTED = 'SHORTLISTED',
  ADMITTED = 'ADMITTED',
  REJECTED = 'REJECTED',
  ENROLLED = 'ENROLLED'
}

export enum StudentStatus {
  ACTIVE = 'ACTIVE',
  GRADUATED = 'GRADUATED',
  SUSPENDED = 'SUSPENDED',
  WITHDRAWN = 'WITHDRAWN',
  ALUMNI = 'ALUMNI'
}

export interface Guardian {
  id: string;
  studentId: string;
  fullName: string;
  relationship: string;
  occupation?: string;
  phone: string;
  email?: string;
  address: string;
  isEmergencyContact: boolean;
}

export interface StudentDocument {
  id: string;
  studentId: string;
  documentType: string;
  documentName: string;
  fileUrl: string;
  verified: boolean;
  uploadedAt: Date;
}

export interface Student {
  id: string;
  admissionNo: string;
  rollNo?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: Gender;
  dateOfBirth: Date;
  email: string;
  phone?: string;
  address: string;
  bloodGroup?: string;
  nationalId?: string;
  admissionDate: Date;
  academicYear: string;
  programId: string;
  currentSemester: number;
  section?: string;
  status: StudentStatus;
  guardians?: Guardian[];
  documents?: StudentDocument[];
  createdAt: Date;
  updatedAt: Date;
}
