/**
 * 정기 교육과정 — 목록은 courseDetails.ts(단일 출처)에서 자동으로 만든다.
 * 기수를 추가·변경하려면 courseDetails.ts 만 고치면 된다. 여기에는 프로그램 정의·신청 안내·강사소개가 있다.
 */
import { links } from './site';
import { courseDetails } from './courseDetails';
import type { CourseKind, CourseStatus } from './types';
export { statusLabel, kindLabel, type CourseKind, type CourseStatus } from './types';

export interface Course {
  title: string;
  /** status 'soon'(추후모집) 이면 비어 있을 수 있다 */
  start?: string;
  end?: string;
  time: string;
  format: string;
  status: CourseStatus;
  kind: CourseKind;
  /** 세부내용 페이지 /courses/{slug}/ */
  slug: string;
}
/** /teaching/ 목록·타임라인용 요약. courseDetails 의 순서를 그대로 따른다. */
export const courses: Course[] = courseDetails.map((d) => ({
  title: d.courseTitle,
  start: d.start,
  end: d.end,
  time: d.props.time,
  format: d.props.format,
  status: d.status,
  kind: d.kind,
  slug: d.slug,
}));

/* ---------- 프로그램(과정 종류) 단위 정의 — /teaching/ 의 상위 축 ---------- */
export interface Program {
  kind: CourseKind;
  name: string;
  en: string;
  tagline: string;
  desc: string;
  audience: string;
  duration: string;
  format: string;
}
export const programs: Program[] = [
  {
    kind: 'strengths',
    name: '강점세미나',
    en: 'STRENGTHS & SELF',
    tagline: '내 안의 강점을 발견하고 삶의 방향을 세웁니다',
    desc: 'CliftonStrengths 강점진단을 바탕으로 강점 이해 · 필터 작용 · 강점 활용 · 진로와 사명을 4주에 걸쳐 다룹니다. 기수별로 목회자부부 · 선교사 · 부교역자부부 특별할인과정이 열립니다.',
    audience: '성인 크리스천 누구나',
    duration: '4주 · 주 1회 180분',
    format: '온라인(Zoom) 참여수업',
  },
  {
    kind: 'couple',
    name: '커플코칭스쿨',
    en: 'COUPLE & FAMILY',
    tagline: '서로의 다름을 이해하고 한 팀이 되는 부부',
    desc: '예비부부 · 신혼/기혼부부 교육, 의사소통, 갈등이해, 결혼의 의미와 목적, 부부 팀빌딩을 다룹니다. 부부가 함께 참여합니다.',
    audience: '기혼부부 · 결혼예비부부',
    duration: '8~10주 · 주 1회 (토 저녁)',
    format: '온라인(Zoom) 참여수업',
  },
  {
    kind: 'spirit',
    name: '하나님과의 친밀함 (영성일기)',
    en: 'INTIMACY WITH GOD',
    tagline: '대화식 기도일기를 쓰며 하나님과 친밀하게 동행하는 삶',
    desc: '하나님께 대화식 기도일기(영성일기)를 쓰면서 하나님과 친밀하게 동행하는 삶을 살아가도록 돕는 6주 과정입니다. 친밀한 삶과 영성일기 · 관계의 관점 · 소통 · 깊이 · 넓이 · 높이를 강의 · 소그룹 나눔 · 기도회로 진행합니다.',
    audience: '누구나 (나이, 성별, 지역 무관)',
    duration: '6주 · 주 1회 150분',
    format: '온라인(Zoom) 참여수업',
  },
  {
    kind: 'oneday',
    name: '1day 세미나',
    en: 'LIFE SEMINARS',
    tagline: '삶의 실제적인 주제 하나를 하루에 집중해서 다룹니다',
    desc: '재정관리 · 연애와 결혼 · 인간관계 등 크리스천의 생활 주제를 강의 · 소그룹 나눔 · 기도로 진행합니다. 이론에 머물지 않고 직접 점검하고 바로 적용합니다. 연말에는 한 해를 돌아보고 새해의 비전과 사명을 세우는 Happy New Year 세미나가 열립니다.',
    audience: '성인 크리스천 누구나',
    duration: '1일 · 3~4시간',
    format: '온라인(Zoom) 참여수업',
  },
];

export const coursesSection = {
  eyebrow: '',
  title: '2026년 정기 교육과정',
  lead: '교육과정은 시즌별로 계속 변경됩니다. 모든 과정은 온라인(Zoom) 참여수업으로 진행합니다.',
  link: { label: '전체 일정 보기', href: '/teaching/#schedule' },
  notice: {
    title: '교육과정 오픈 소식을 가장 먼저 받아보세요',
    text: '카카오채널을 추가하시면 새 교육과정이 열릴 때 공지를 받을 수 있습니다.',
    cta: { label: '카카오채널 추가하기', href: links.kakao },
  },
};

/* =====================================================================
 * 교육과정 세부내용 — /courses/{slug}/
 * 원본: https://buildup.oopy.io/2e734cda-35a4-800f-bce7-cbf6012c472c (2026-09 캡처)
 * 문구는 원본 그대로. 빠뜨리는 항목이 없도록 속성 표 → 본문 순서를 그대로 따른다.
 * ===================================================================== */

/** 모든 과정 상세 페이지가 공유하는 신청 절차·계좌·종합신청서 안내 */
export const enrollment = {
  form: 'https://forms.gle/uL9AU2qktWrbBNxD6',
  bank: { name: '신한은행', account: '110-590-996059', holder: '빌드업미니스트리' },
  notes: [
    '같은 과정이 다른 일정으로 개설되므로 가이드라인 및 교육일정을 꼭 확인하시고 신청하세요.',
    '신청비까지 입금하셔야 신청절차가 완료됩니다.',
  ],
  after: '신청이 완료되신 분들은 스쿨시작 1~2주일 전에 단체카톡방을 만들어서 자세하게 안내해드릴 예정입니다.',
  master: {
    title: '빌드업교육과정 종합신청서',
    items: [
      '본 신청서는 빌드업미니스트리(대표:신건)에서 진행하는 교육과정 종합신청서입니다.',
      '다양한 교육과정이 있으니 반드시 해당교육과정의 세부 내용 및 참석가이드를 자세히 읽어보시고 신청하시기 바랍니다. (buildup365.com)',
      '신청인원이 많은 경우에는 조기마감될 수 있으며 선착순으로 진행합니다. (대기자들에게는 개별연락 및 환불)',
      '신청비까지 입금하셔야 신청절차가 완료됩니다. (입금계좌 : 신한은행 110-590-996059 예금주/빌드업미니스트리) — 화면카피 또는 메모: 입금자명+교육과정명 (예/홍길동커플13기, 홍길동강점5기, 홍길동해피뉴4). 신청자와 입금자명이 다를 경우에는 꼭 연락을 주셔야 합니다.',
      '스쿨참여에 대한 세부적인 안내는 교육 시작 2주 정도 전에 카톡방을 만들어서 알려드립니다. (그 전에 궁금하신 내용은 카카오톡 또는 빌드업미니스트리 카카오채널 채팅을 활용해서 문의하시기 바랍니다)',
    ],
  },
};

/** 강사소개 — 과정 상세 페이지 공통 (원본 문구 그대로) */
export const instructor = {
  name: '신건',
  role: '목사 · 코치',
  title: '빌드업 미니스트리 대표',
  photo: '/images/profile.jpg',
  items: [
    '국내 프로코치(KPC) / 국제 프로코치(PCC/미갱신)',
    '서울신학대학교 교회성장대학원 강사 (코칭, 티칭)',
    'NLP(Neuro Linguistic Programing) Coach / NLP Coach',
    'Gallup CliftonStrengths Coach (갤럽 강점 공식인증코치)',
    'Prepare Enrich 커플공인상담사/강사',
    'T-JTA 성격검사 공인상담사',
    'Happy Life(라이프코칭과정) 1~4단계 강사',
    '5R Coaching Leadership 강사 / 청소년 꿈찾기 과정 강사',
    '7 Habits (리더십) 강사',
    'YWAM U-DTS (제자훈련학교) 이수 및 스텝',
    '前 신촌성결교회 청년사역 담당목사',
    '코칭시간 4,000시간 이상 / 강연&교육 3,500시간 이상',
  ],
  stats: [
    { value: '4,000+', label: '코칭 시간' },
    { value: '3,500+', label: '강연 · 교육 시간' },
  ],
  link: { label: '세부 프로필 보기', href: '/about/' },
};
