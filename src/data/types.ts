/**
 * 교육과정 공통 타입. courseDetails.ts 와 courses.ts 가 함께 쓴다.
 */
/** soon = 추후모집: 다음 기수가 예고만 된 상태. 일정(start)이 없어도 된다 */
export type CourseStatus = 'open' | 'full' | 'soon' | 'done';
/** 프로그램 순서 = /teaching/ 의 블록·타임라인 순서: 강점 → 커플 → 영성일기 → 1day (Happy New Year 는 1day 에 포함) */
export type CourseKind = 'strengths' | 'couple' | 'spirit' | 'oneday';
export const statusLabel: Record<CourseStatus, string> = { open: '모집중', full: '모집완료', soon: '추후모집', done: '교육완료' };
export const kindLabel: Record<CourseKind, string> = {
  strengths: '강점세미나',
  couple: '커플코칭스쿨',
  spirit: '하나님과의 친밀함 (영성일기)',
  oneday: '1day 세미나',
};
