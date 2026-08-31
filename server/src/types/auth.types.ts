
export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ACADEMIC_DEAN = 'ACADEMIC_DEAN',
  FACULTY = 'FACULTY',
  FINANCE_OFFICER = 'FINANCE_OFFICER',
  LIBRARIAN = 'LIBRARIAN',
  HOSTEL_WARDEN = 'HOSTEL_WARDEN',
  TRANSPORT_MANAGER = 'TRANSPORT_MANAGER',
  STUDENT = 'STUDENT',
  PARENT = 'PARENT'
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
  PENDING_VERIFICATION = 'PENDING_VERIFICATION'
}

export interface Permission {
  id: string;
  code: string;
  module: string;
  description: string;
  createdAt: Date;
}

export interface RolePermissions {
  role: UserRole;
  permissions: string[];
}

export interface UserSession {
  id: string;
  userId: string;
  token: string;
  ipAddress: string;
  userAgent: string;
  expiresAt: Date;
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  username: string;
  passwordHash: string;
  role: UserRole;
  status: UserStatus;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  avatarUrl?: string;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  user: Omit<User, 'passwordHash'>;
  token: string;
  expiresIn: number;
}
