/**
 * 교육과정 공통 타입. courseDetails.ts 와 courses.ts 가 함께 쓴다.
 */
export type CourseStatus = 'open' | 'full' | 'done';
export type CourseKind = 'strengths' | 'couple' | 'oneday' | 'special';
export const statusLabel: Record<CourseStatus, string> = { open: '모집중', full: '모집완료', done: '교육완료' };
export const kindLabel: Record<CourseKind, string> = {
  strengths: '강점세미나',
  couple: '커플코칭스쿨',
  oneday: '1day 세미나',
  special: '특별 세미나',
};
