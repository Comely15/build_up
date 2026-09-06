/**
 * 홈(/) 섹션 문구 — 히어로 · 3 영역 · 5가지 영역 · 교육과정 특징.
 */

/* ---------- Home: Hero ---------- */
export const hero = {
  eyebrow: 'BUILD UP MINISTRY',
  title: ['나를 세우고, 관계를 세우고,', '삶을 깊게 세웁니다'],
  keyword: '강점 · 관계 · 영성',
  lead: [
    '자신의 강점을 발견하여 삶에 잘 활용하도록, 서로를 이해하며 건강한 관계를 만들어 가도록, 깊이 있고 풍요로운 영성을 누리도록 돕습니다.',
    '교육 · 코칭 · 콘텐츠를 통해 개인과 가정, 조직의 건강한 성장과 변화를 돕습니다.',
  ],
  primary: { label: '강의 요청하기', href: '/ask/' },
  secondary: { label: '교육 과정 보기', href: '/teaching/' },
  profile: {
    name: '신건',
    role: '목사 · 코치',
    photo: '/images/profile.jpg',
    tags: ['프로코치', '강점코치', '커플상담사'],
    facts: ['서울시 가족센터 가족학교 전문강사', '서울신학대 교회성장대학원 코칭강사', '교육·강연 및 코칭 각 4,000시간 이상'],
    link: { label: '세부 프로필 보기', href: '/about/' },
  },
  points: [
    { icon: 'star', title: '강점 · Self', text: '자신의 고유한 강점과 가능성을 발견하고 삶과 일에서 효과적으로 활용합니다.' },
    { icon: 'users', title: '관계 · Relationship', text: '서로의 차이를 이해하고 건강하게 소통하며 더 좋은 관계를 만들어 갑니다.' },
    { icon: 'cross', title: '영성 · Spirituality', text: '하나님과 동행하며 신앙이 일상의 삶과 관계, 일터로 이어지게 합니다.' },
  ],
};

/* ---------- Home: 3 pillars ---------- */
export const pillars = {
  eyebrow: '',
  title: '전문 교육 · 코칭 영역',
  link: { label: '전체 보기', href: '/teaching/' },
  cards: [
    {
      tag: 'SELF',
      icon: 'star',
      title: '나를 세우다',
      text: '자신의 고유한 강점과 가능성을 발견하고 삶과 일에서 효과적으로 활용하도록 돕습니다.',
      program: '강점세미나 (교육과정)',
      items: ['CliftonStrengths 강점진단', '강점이해', '필터작용', '강점활용', '진로와 사명'],
    },
    {
      tag: 'RELATIONSHIP',
      icon: 'users',
      title: '관계를 세우다',
      text: '서로의 차이를 이해하고 건강하게 소통하며 더 좋은 관계를 만들어 가도록 돕습니다.',
      program: '커플코칭 (부부학교)',
      items: ['예비부부교육', '신혼/기혼부부교육', '의사소통', '갈등이해', '결혼의 의미와 목적', '부부 팀빌딩'],
    },
    {
      tag: 'SPIRITUALITY',
      icon: 'cross',
      title: '삶을 깊게 세우다',
      text: '하나님과 동행하며 신앙이 일상의 삶과 관계, 일터로 이어지도록 돕습니다.',
      program: '하나님과의 친밀함 (영성일기)',
      items: ['제자훈련', '말씀묵상', '하나님과 동행하는 삶', '일과 영성', '크리스천 리더십', '임직자/교사 교육'],
    },
  ],
  note: '교회뿐 아니라 가족센터 · 지방자치단체 · 학교 · 기업 · 비영리기관의 대상과 목적에 맞추어 교육과 코칭을 구성합니다.',
};

/* ---------- 교육과정의 5가지 영역 ---------- */
export interface Area {
  key: string;
  en: string;
  ko: string;
  icon: string;
  courses: { name: string; meta: string }[];
}
export const areas: Area[] = [
  {
    key: 'faith',
    en: 'Faith',
    ko: '신앙생활',
    icon: 'cross',
    courses: [
      { name: '하나님과 동행하는 삶', meta: '10주 · 신앙의 기초 10가지 정립' },
      { name: '하나님과의 친밀감', meta: '6주 · 영성일기 통한 친밀한 교제' },
    ],
  },
  {
    key: 'work',
    en: 'Work',
    ko: '직장생활',
    icon: 'briefcase',
    courses: [
      { name: '강점 세미나', meta: '4주' },
      { name: '5R 코칭 리더십', meta: '20시간' },
      { name: '7 Habits', meta: '24시간' },
    ],
  },
  {
    key: 'life',
    en: 'Life',
    ko: '개인생활',
    icon: 'user',
    courses: [
      { name: '튜닝과정', meta: '내면정립 · 10주' },
      { name: '사명비전과정', meta: '인생정립 · 10주' },
    ],
  },
  {
    key: 'family',
    en: 'Family',
    ko: '가정생활',
    icon: 'home',
    courses: [{ name: '커플코칭', meta: '10주 · 기혼부부, 결혼예비부부' }],
  },
  {
    key: 'community',
    en: 'Community',
    ko: '교회생활',
    icon: 'church',
    courses: [
      { name: '세미나 / 집회 / 특강', meta: '성도, 리더/임직자, 교사' },
      { name: '목회자, 선교사 세미나', meta: '강점, 코칭, 리더십, 팀빌딩' },
    ],
  },
];

/* ---------- 빌드업 교육과정의 특징 ---------- */
export const method = {
  eyebrow: '',
  title: '빌드업 교육과정이 다른 이유',
  lead: '코칭과 NLP, 말씀과 기도가 한 과정 안에서 만납니다. 지식 전달이 아니라 삶의 변화를 목표로 설계합니다.',
  cta: { label: '교육 과정 보기', href: '/teaching/' },
  features: [
    { title: '국제/국내 프로코치', text: '세계적인 코칭 툴을 접목하여 의식의 변화를 추구합니다.' },
    { title: 'NLP Trainer', text: '행동과 감정의 뿌리가 되는 무의식적인 차원에서의 변화를 추구합니다.' },
    { title: '목회자가 진행', text: '말씀과 기도사역을 통한 영혼의 변화를 추구합니다.' },
    { title: '전문 강사가 진행', text: '지루한 전달식 수업이 아닌 참여자 중심의 창의적 수업을 운영합니다.' },
    { title: '소그룹 활동', text: '나눔을 통한 사고의 확장과 상호책임관계를 형성합니다.' },
    { title: '변화 중심 교육 시스템', text: '수업 후 삶의 적용과 습관의 변화로 이어지도록 과정을 운영합니다.' },
    { title: '검증된 과정', text: '다양한 사람들을 대상으로 효과가 검증된 수업을 운영합니다.' },
  ],
  marquee: [
    'CliftonStrengths',
    '강점세미나',
    '커플코칭스쿨',
    '영성일기',
    '7 Habits',
    '5R Coaching',
    'NLP',
    '튜닝과정',
    '사명비전',
    'Prepare/Enrich',
    'T-JTA',
    '제자훈련',
    '부부학교',
    '일과 영성',
    '강점 리더십',
    '청년 수련회',
  ],
};
