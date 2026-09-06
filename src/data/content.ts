/**
 * 문구·데이터 진입점. 페이지는 이 파일에서만 import 한다.
 *
 *   site.ts           기관 정보 · 외부 링크 · 메뉴 · 푸터 · 공용 CTA
 *   home.ts           홈 섹션 (히어로 · 영역 · 특징)
 *   types.ts          교육과정 상태/종류 타입과 라벨
 *   courseDetails.ts  ★ 교육과정 12건의 일정·상태·세부내용 (단일 출처)
 *   courses.ts        목록 요약(자동 생성) · 프로그램 4종 · 신청 안내 · 강사소개
 *   voices.ts         코칭 후기
 *   gallery.ts        갤러리 · 사역 현장 기록
 *   about / teaching / coaching / sns / ask .ts   각 페이지 문구
 */
export * from './site';
export * from './home';
export * from './courses';
export * from './voices';
export * from './gallery';
export * from './about';
export * from './teaching';
export * from './coaching';
export * from './sns';
export * from './ask';
export { courseDetails, type CourseDetail, type CourseBlock, type LinkCard } from './courseDetails';
