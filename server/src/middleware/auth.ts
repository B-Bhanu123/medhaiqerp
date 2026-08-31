
import { Request, Response, NextFunction } from 'express';
import { JwtEngine } from '../core/jwt';
import { UnauthorizedError, ForbiddenError } from '../core/errors';

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    email: string;
    role: string;
  };
}

export function authenticate(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new UnauthorizedError('Missing or invalid authorization header'));
  }

  const token = authHeader.split(' ')[1];
  const payload = JwtEngine.verify(token);
  if (!payload) {
    return next(new UnauthorizedError('Token is invalid or expired'));
  }

  req.user = payload;
  next();
}

export function authorize(...roles: string[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new UnauthorizedError());
    }

    if (!roles.includes(req.user.role)) {
      return next(new ForbiddenError(`Role ${req.user.role} is not authorized for this route`));
    }

    next();
  };
}
