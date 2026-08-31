
import crypto from 'crypto';

export class Security {
  public static hashPassword(password: string): string {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
  }

  public static verifyPassword(password: string, storedHash: string): boolean {
    const [salt, originalHash] = storedHash.split(':');
    if (!salt || !originalHash) return false;
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return originalHash === hash;
  }

  public static generateRandomToken(length = 32): string {
    return crypto.randomBytes(length).toString('hex');
  }

  public static generateAdmissionNumber(prefix = 'STU'): string {
    const year = new Date().getFullYear().toString().substring(2);
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}${year}${randomDigits}`;
  }

  public static generateInvoiceNumber(): string {
    const dateStr = new Date().toISOString().slice(0,10).replace(/-/g, '');
    const rand = Math.floor(100 + Math.random() * 900);
    return `INV-${dateStr}-${rand}`;
  }
}
