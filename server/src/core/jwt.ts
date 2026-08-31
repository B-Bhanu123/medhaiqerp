
import crypto from 'crypto';
import { config } from '../config/env';

export interface TokenPayload {
  userId: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

export class JwtEngine {
  public static sign(payload: Omit<TokenPayload, 'iat' | 'exp'>): string {
    const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
    const now = Math.floor(Date.now() / 1000);
    const exp = now + (7 * 24 * 60 * 60); // 7 days
    const fullPayload = Buffer.from(JSON.stringify({ ...payload, iat: now, exp })).toString('base64url');
    
    const signature = crypto
      .createHmac('sha256', config.jwtSecret)
      .update(`${header}.${fullPayload}`)
      .digest('base64url');

    return `${header}.${fullPayload}.${signature}`;
  }

  public static verify(token: string): TokenPayload | null {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;
      const [header, payload, signature] = parts;

      const expectedSig = crypto
        .createHmac('sha256', config.jwtSecret)
        .update(`${header}.${payload}`)
        .digest('base64url');

      if (signature !== expectedSig) return null;

      const decodedPayload: TokenPayload = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
      const now = Math.floor(Date.now() / 1000);
      if (decodedPayload.exp && decodedPayload.exp < now) return null;

      return decodedPayload;
    } catch {
      return null;
    }
  }
}
