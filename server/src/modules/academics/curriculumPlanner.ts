export interface CoursePrerequisite {
  courseId: string;
  prerequisiteCourseIds: string[];
  minimumGradePoint: number;
}

export class CurriculumPlannerEngine {
  public static checkPrerequisitesMet(
    prereqs: CoursePrerequisite,
    studentCompletedCourses: { courseId: string; gradePoint: number }[]
  ): { passed: boolean; missingCourses: string[] } {
    const missing: string[] = [];
    prereqs.prerequisiteCourseIds.forEach(reqId => {
      const completed = studentCompletedCourses.find(c => c.courseId === reqId);
      if (!completed || completed.gradePoint < prereqs.minimumGradePoint) {
        missing.push(reqId);
      }
    });

    return {
      passed: missing.length === 0,
      missingCourses: missing
    };
  }
}
