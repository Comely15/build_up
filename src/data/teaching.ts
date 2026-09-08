/**
 * /teaching/ 교육 과정 페이지 문구 (과정 데이터는 courseDetails.ts)
 */

/* ---------- /teaching/ 교육 과정 ---------- */
export const teaching = {
  hero: {
    eyebrow: '',
    title: '교육 과정',
    lead: '강점세미나, 커플코칭스쿨, 하나님과의 친밀함(영성일기), 1day 세미나까지. 코칭 툴과 NLP, 말씀과 기도가 한 과정 안에서 만납니다.',
    primary: { label: '정기 교육과정 보기', href: '#schedule' },
    secondary: { label: '강의 요청하기', href: '/ask/' },
  },
  areasSection: {
    eyebrow: '',
    title: '교육과정의 5가지 영역',
    lead: '개인생활을 중심으로 신앙 · 직장 · 가정 · 교회생활이 연결됩니다.',
  },
  schedule: {
    eyebrow: '',
    title: '2026 정기 교육과정',
    lead: '교육과정은 시즌별로 계속 변경됩니다. 신청과 문의는 카카오채널 또는 문자로 받습니다.',
    finder: {
      title: '어떤 과정이 나에게 맞을까요?',
      lead: '목적에 따라 고르세요. 모든 과정은 온라인(Zoom)으로 참여합니다.',
      items: [
        { kind: 'strengths', goal: '나를 알고 싶다', text: '내 강점을 발견하고 삶 · 일 · 관계에서 활용하고 싶을 때' },
        { kind: 'couple', goal: '부부 · 결혼을 준비한다', text: '배우자와 한 팀이 되고 싶은 기혼부부, 결혼을 준비하는 예비부부' },
        { kind: 'spirit', goal: '하나님과 친밀해지고 싶다', text: '매일 대화식 기도일기를 쓰며 하나님과 동행하는 삶을 6주간 훈련하고 싶을 때' },
        { kind: 'oneday', goal: '한 주제를 짧게 배운다', text: '재정 · 연애 · 인간관계 같은 생활 주제를 하루에 집중해서 다루거나, 연말에 새해를 계획하고 싶을 때' },
      ],
    },
    timelineTitle: '2026년 연간 일정',
    timelineLead: '프로그램별로 언제 열리는지 한눈에. 모집중 · 모집완료 막대를 누르면 해당 기수로 이동합니다.',
    pastLabel: '지난 기수',
  },
};
