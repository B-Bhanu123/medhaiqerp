
export class ERPMath {
  public static calculateGPA(grades: { credits: number; gradePoint: number }[]): number {
    if (!grades || grades.length === 0) return 0.0;
    const totalCredits = grades.reduce((acc, g) => acc + g.credits, 0);
    if (totalCredits === 0) return 0.0;
    const totalPoints = grades.reduce((acc, g) => acc + (g.credits * g.gradePoint), 0);
    return Math.round((totalPoints / totalCredits) * 100) / 100;
  }

  public static calculateLetterGrade(totalScore: number): { letter: 'A+' | 'A' | 'B+' | 'B' | 'C' | 'D' | 'F'; point: number } {
    if (totalScore >= 90) return { letter: 'A+', point: 4.0 };
    if (totalScore >= 80) return { letter: 'A', point: 3.7 };
    if (totalScore >= 70) return { letter: 'B+', point: 3.3 };
    if (totalScore >= 60) return { letter: 'B', point: 3.0 };
    if (totalScore >= 50) return { letter: 'C', point: 2.0 };
    if (totalScore >= 40) return { letter: 'D', point: 1.0 };
    return { letter: 'F', point: 0.0 };
  }

  public static calculateOverdueFine(daysOverdue: number, ratePerDay = 5): number {
    if (daysOverdue <= 0) return 0;
    return daysOverdue * ratePerDay;
  }

  public static calculateNetSalary(base: number, allowances: { hra: number; da: number; special: number }, deductions: { pf: number; tax: number; other: number }): { gross: number; totalDeductions: number; net: number } {
    const gross = base + allowances.hra + allowances.da + allowances.special;
    const totalDeductions = deductions.pf + deductions.tax + deductions.other;
    const net = gross - totalDeductions;
    return { gross, totalDeductions, net };
  }
}
