/**
 * 빌드업 미니스트리 — 사이트 문구·목록.
 * 파일은 페이지/역할별로 나뉘어 있고, 모든 페이지는 `./content` 를 통해 가져온다 (경로가 바뀌지 않는다).
 * 원본: https://buildup365.com/ 및 buildup.oopy.io (2026-09 캡처)
 */
export const site = {
  name: '빌드업 미니스트리',
  nameEn: 'Build Up Ministry',
  tagline: '강점 · 관계 · 영성 교육·코칭 전문기관',
  description:
    '강점 · 관계 · 영성을 기반으로 개인과 가정, 조직의 건강한 성장과 변화를 돕는 교육 · 코칭 전문기관입니다.',
  motto: 'Build Up Self. Build Up Relationships. Grow Deeper in Faith.',
  year: 2026,
  company: 'Build up Ministry',
  address: '서울특별시 영등포구 양산로 97 길빌딩 2층 (206호)',
  addressShort: '서울시 영등포구 양산로97 206호',
  email: 'shingun94@naver.com',
  phone: '010-7536-9369',
  phoneHref: 'tel:01075369369',
};

/* ---------- 외부 링크 ---------- */
export const links = {
  askForm: 'https://forms.gle/eCvfK6hWiA29wow29',
  coachingForm: 'https://forms.gle/CQHxBsGURnYkUaEz6',
  kakao: 'https://pf.kakao.com/_gUHps',
  naverMap: 'https://naver.me/5qDragto',
  instagram: 'https://www.instagram.com/shingun_coach',
  youtube: 'https://www.youtube.com/@Buildup365',
  facebook: 'https://www.facebook.com/shingun94',
  partnerCoach: 'https://jocoach.netlify.app/',
  certificates: 'https://buildup.oopy.io/a4c58f00-373a-4ab9-b952-f9110edd40dc',
  interviews: 'https://buildup.oopy.io/07e36a0b-de8a-457a-aa18-524b99781767',
  lecturePhotos: 'https://buildup.oopy.io/b940b309-f7d2-410d-a879-5169185466a6',
};

/* ---------- Header ---------- */
export interface NavItem {
  label: string;
  href: string;
}
export const nav: NavItem[] = [
  { label: '소개', href: '/about/' },
  { label: '교육 과정', href: '/teaching/' },
  { label: '코칭·상담', href: '/coaching/' },
  { label: 'SNS·위치', href: '/sns/' },
];
export const navCta = { label: '강의 요청', href: '/ask/' };

/* ---------- 공용 Contact CTA ---------- */
export const contact = {
  eyebrow: '',
  title: '교육 · 코칭 · 강의 문의',
  text: '기관과 대상, 교육 목적에 맞는 프로그램을 함께 구성합니다.',
  primary: { label: '강의 요청하기', href: '/ask/' },
  secondary: { label: '코칭 요청하기', href: '/coaching/#request' },
  kakao: { label: '카카오채널 (문의)', href: links.kakao },
};

/* ---------- Footer ---------- */
export const footer = {
  columns: [
    {
      title: '메뉴',
      links: [
        { label: '소개', href: '/about/' },
        { label: '교육 과정', href: '/teaching/' },
        { label: '코칭·상담', href: '/coaching/' },
              { label: 'SNS·위치', href: '/sns/' },
        { label: '강의 요청', href: '/ask/' },
      ],
    },
    {
      title: '바로가기',
      links: [
        { label: '강의 요청서 (Google Form)', href: links.askForm },
        { label: '코칭 요청서 (Google Form)', href: links.coachingForm },
        { label: '카카오채널', href: links.kakao },
        { label: '네이버 지도', href: links.naverMap },
      ],
    },
    {
      title: 'SNS',
      links: [
        { label: '인스타그램 @shingun_coach', href: links.instagram },
        { label: '유튜브 @buildup365', href: links.youtube },
        { label: '페이스북 @shingun94', href: links.facebook },
      ],
    },
  ],
  social: [
    { name: 'instagram', href: links.instagram },
    { name: 'youtube', href: links.youtube },
    { name: 'facebook', href: links.facebook },
  ],
};
