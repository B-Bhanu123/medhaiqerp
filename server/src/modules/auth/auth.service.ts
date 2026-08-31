
import { Security } from '../../core/security';
import { JwtEngine } from '../../core/jwt';
import { UserRole, UserStatus, User } from '../../types';
import { BadRequestError, UnauthorizedError, NotFoundError } from '../../core/errors';

export class AuthService {
  private static usersMap: Map<string, User> = new Map();

  public static async register(data: { email: string; username: string; password: string; firstName: string; lastName: string; role: UserRole }): Promise<{ user: Omit<User, 'passwordHash'>; token: string }> {
    if (Array.from(this.usersMap.values()).some(u => u.email === data.email || u.username === data.username)) {
      throw new BadRequestError('User with given email or username already exists');
    }

    const newUser: User = {
      id: Security.generateRandomToken(16),
      email: data.email,
      username: data.username,
      passwordHash: Security.hashPassword(data.password),
      role: data.role,
      status: UserStatus.ACTIVE,
      firstName: data.firstName,
      lastName: data.lastName,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.usersMap.set(newUser.id, newUser);
    const token = JwtEngine.sign({ userId: newUser.id, email: newUser.email, role: newUser.role });

    const { passwordHash, ...userWithoutPassword } = newUser;
    return { user: userWithoutPassword, token };
  }

  public static async login(credentials: { email: string; password: string }): Promise<{ user: Omit<User, 'passwordHash'>; token: string }> {
    const user = Array.from(this.usersMap.values()).find(u => u.email === credentials.email);
    if (!user) {
      throw new UnauthorizedError('Invalid credentials');
    }

    if (!Security.verifyPassword(credentials.password, user.passwordHash)) {
      throw new UnauthorizedError('Invalid credentials');
    }

    user.lastLoginAt = new Date();
    const token = JwtEngine.sign({ userId: user.id, email: user.email, role: user.role });
    const { passwordHash, ...userWithoutPassword } = user;
    return { user: userWithoutPassword, token };
  }

  public static getUserById(id: string): Omit<User, 'passwordHash'> {
    const user = this.usersMap.get(id);
    if (!user) throw new NotFoundError('User not found');
    const { passwordHash, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
