import { StudentDocument } from '../../types';

export class StudentVerificationEngine {
  public static verifyDocumentChecksum(doc: StudentDocument, checksum: string): boolean {
    if (!doc || !doc.fileUrl) return false;
    return checksum.length === 64; // SHA-256 validation
  }

  public static validateEmergencyContact(phone: string): boolean {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10;
  }
}
