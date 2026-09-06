/**
 * /about/ 소개 페이지 문구
 */
import { links } from './site';
/* ---------- /about/ 소개 ---------- */
export const about = {
  hero: {
    eyebrow: '',
    title: '사역 소개',
    lead: '빌드업 미니스트리는 한 사람의 고유한 강점과 가능성을 발견하고, 가정과 공동체 안에서 건강한 관계를 만들어 가며, 하나님과 동행하는 삶을 살아가도록 돕습니다.',
  },
  core: [
    {
      icon: 'compass',
      title: '사명',
      text: '한 사람의 고유한 강점과 가능성을 발견하고, 가정과 공동체 안에서 건강한 관계를 만들어 가며, 하나님과 동행하는 삶을 살아가도록 돕습니다.',
    },
    {
      icon: 'layers',
      title: '핵심 영역',
      text: '강점 · 관계 · 영성의 세 영역을 중심으로 개인과 가정, 조직의 건강한 성장과 변화를 돕습니다.',
    },
    {
      icon: 'spark',
      title: '핵심 사역',
      text: '전문적인 교육과 코칭, 실제적인 콘텐츠를 통해 배움이 지식에 머물지 않고 삶과 관계의 실제적인 변화로 이어지도록 돕습니다.',
    },
  ],
  certs: {
    title: '자격증 및 수료과정',
    lead: '코칭 · 강점 · NLP · 부부상담 · 리더십 분야의 국제/국내 자격과 수료과정입니다.',
    items: [
      { src: '/images/certs/01-kpc.jpg', title: 'KPC 한국프로코치', org: '(사)한국코치협회 · 2012' },
      { src: '/images/certs/02-pcc.jpg', title: 'PCC 국제프로코치', org: 'International Coach Federation' },
      { src: '/images/certs/03-cliftonstrengths.jpg', title: 'CliftonStrengths Certified Coach', org: 'Gallup' },
      { src: '/images/certs/04-7habits.jpg', title: '7 Habits Facilitator', org: 'FranklinCovey · 2015' },
      { src: '/images/certs/05-sglt.jpg', title: 'SGLT 소그룹 리더 훈련 수료', org: '한국크리스천세계사역 · 2020' },
      { src: '/images/certs/06-nlp-master.jpg', title: 'NLP Master Practitioner', org: 'ABNLP' },
      { src: '/images/certs/07-nlp-trainer.jpg', title: 'NLP Trainer Training Program', org: 'Graduate Diploma · 2013' },
      { src: '/images/certs/08-5r-coaching.jpg', title: '5R 코칭 리더십 FT', org: 'Asia Coach Center · 2013' },
      { src: '/images/certs/09-tjta.jpg', title: 'T-JTA Certification Training', org: 'Psychological Publications · 2015' },
      { src: '/images/certs/10-prepare-enrich.jpg', title: 'Prepare-Enrich CV 상담사', org: 'ENRICH KOREA · 2014' },
      { src: '/images/certs/11-enrich-director.jpg', title: 'Prepare-Enrich 전문강사', org: 'ENRICH KOREA · 2018' },
      { src: '/images/certs/12-teen-dream.jpg', title: '청소년 꿈찾기 강사', org: 'Asia Coach Center · 2013' },
    ],
  },
  leader: {
    eyebrow: '',
    name: '신건',
    role: '코치 / 목사',
    headline: '목회 현장에서 부흥과 성장을 경험한 교육 및 코칭 전문가',
    summary: ['빌드업 미니스트리 대표', '프로코치 / 강점코치 / 부부코치', '서울신학대학교 교회성장대학원 코칭 강사', '서울시 가족센터 가족학교 전문강사', '前 신촌성결교회 청년사역 담당목사'],
    stats: [
      { value: '4,000+', label: '코칭 시간' },
      { value: '3,500+', label: '강연 · 교육 시간' },
      { value: '15년', label: '청년사역 담당' },
    ],
    groups: [
      {
        title: '코칭 전문가',
        items: [
          '프로코치 (KPC / PCC 미갱신)',
          '서울신학대학교 교회성장대학원 “코칭” 강사',
          'NLP Trainer / NLP Coach',
          'Gallup CliftonStrengths 강점 공식인증코치',
          'Prepare Enrich 커플 및 부부 공인상담사',
          'TJTA 성격검사 공인상담사',
          '4,000시간 이상 코칭 실시 (개인, 커플/부부, 목회자, 기업임원 등)',
        ],
        link: { label: '코칭 소개 (코칭 추천의 글)', href: '/coaching/#voices' },
      },
      {
        title: '티칭 전문가',
        items: [
          '서울신학대학교 교회성장대학원 “티칭” 강사',
          '서울시 가족센터 전문강사 (예비/신혼부부교실)',
          '5R Coaching Leadership (코치양성 프로그램 · ICF) 강사',
          '7 Habits of Highly Effective People (리더십 · Franklin Covey) 강사',
          '강점 (Gallup CliftonStrengths) 과정 강사',
          '커플코칭스쿨 (부부학교/결혼예비학교) 강사',
          '청소년 꿈찾기 과정 강사 (사명, 비전)',
          '튜닝 프로그램 (내면세계의 정립, 감정, 무의식) 강사',
          '비전사명 프로그램 강사',
          '하나님과의 친밀감 (영성일기) 강사',
          'FWIA (일과 신앙) 강사',
          '강연 & 교육 3,500시간 이상 실시',
        ],
        link: { label: '자격증 및 수료과정 보기', href: links.certificates, external: true },
      },
      {
        title: '현장 목회자',
        items: [
          '서울신학대학교 / 대학원',
          'YWAM U-DTS (제자훈련학교) 이수 및 간사',
          '(전) 신촌성결교회 청년사역 담당목사 — 15년간 교회성장과 부흥 경험',
          '예배 · 새가족 · 소그룹 · 목양 · 교육훈련 · 전도/선교 사역 및 리더와 목회자 훈련에 이르기까지 목회현장에서 필요한 다양한 교육과정 이수 및 현장사역 실시',
          '(현) 신촌성결교회 협동목사',
        ],
        link: { label: '신건 목사 언론 인터뷰 보기', href: links.interviews, external: true },
      },
    ],
  },
};
