/**
 * /sns/ SNS · 오시는 길 페이지 문구
 */
import { links, site } from './site';
/* ---------- /sns/ SNS · 위치 ---------- */
export const sns = {
  hero: {
    eyebrow: '',
    title: 'SNS & 오시는 길',
    lead: '온라인 콘텐츠와 문의 채널, 그리고 빌드업 미니스트리 사무실로 오시는 길을 안내합니다. 궁금한 점은 어떤 채널로든 편하게 남겨주세요.',
    /** 히어로 오른쪽 "빠른 연락" 카드 */
    quick: {
      title: '빠른 연락',
      rows: [
        { label: '카카오채널', value: '빌드업 미니스트리', href: links.kakao },
        { label: '연락처', value: site.phone, href: site.phoneHref },
        { label: '이메일', value: site.email, href: `mailto:${site.email}` },
      ],
    },
  },
  channels: {
    eyebrow: '',
    title: '온라인에서 만나요',
    lead: '강의와 코칭의 인사이트, 교육과정 소식을 채널별로 나눕니다. 목적에 맞는 채널을 골라 팔로우하세요.',
    items: [
      {
        brand: 'instagram',
        icon: 'instagram-logo',
        name: '인스타그램',
        handle: '@shingun_coach',
        href: links.instagram,
        desc: '코칭 인사이트와 강점·관계 이야기, 사역 현장의 일상',
        best: '짧은 글과 사진으로 가볍게 보고 싶을 때',
        cta: '팔로우',
      },
      {
        brand: 'youtube',
        icon: 'youtube-logo',
        name: '유튜브',
        handle: '@buildup365',
        href: links.youtube,
        desc: '강의·세미나 영상과 코칭 콘텐츠',
        best: '강의를 영상으로 미리 보고 싶을 때',
        cta: '구독',
      },
      {
        brand: 'facebook',
        icon: 'facebook-logo',
        name: '페이스북',
        handle: '@shingun94',
        href: links.facebook,
        desc: '사역 소식과 강의·집회 후기',
        best: '사역 근황을 타임라인으로 보고 싶을 때',
        cta: '팔로우',
      },
      {
        brand: 'kakao',
        icon: 'kakao-logo',
        name: '카카오채널',
        handle: '빌드업 미니스트리',
        href: links.kakao,
        desc: '오픈채팅 · 교육공지. 새 교육과정이 열릴 때 가장 먼저 안내합니다.',
        best: '교육과정 신청·문의와 오픈 소식을 받고 싶을 때',
        cta: '채널 추가',
        featured: true,
      },
    ],
  },
  inquiry: {
    eyebrow: '',
    title: '문의 (교육 / 코칭 / 강의)',
    items: [
      {
        icon: 'kakao-logo',
        brand: 'kakao',
        title: '카카오톡 채널 (오픈채팅 / 교육공지)',
        text: '카카오톡 채널을 추가하시면 교육과정 개설 시 안내를 받아보실 수 있습니다.',
        note: '교육과정 신청과 일정 문의도 채널 채팅으로 받습니다.',
        primary: { label: '채널 추가', href: links.kakao, external: true },
      },
      {
        icon: 'form-check',
        title: '강의 · 세미나 요청',
        text: '교회 · 기관 · 학교 · 기업 특강, 세미나, 워크숍',
        note: '요청서 접수 후 2~3일 이내에 회신드리며, 일정과 주제는 개별 협의합니다.',
        primary: { label: '강의 요청서 작성', href: links.askForm, external: true },
        secondary: { label: '강의 주제 보기', href: '/ask/' },
      },
      {
        icon: 'heart',
        title: '코칭 · 상담 요청',
        text: '개인 · 부부 · 목회자 코칭 (대면 원칙)',
        note: '요청서 확인 후 업무 시간 기준 3일 이내에 연락드립니다.',
        primary: { label: '코칭 요청서 작성', href: links.coachingForm, external: true },
        secondary: { label: '코칭 안내 보기', href: '/coaching/' },
      },
      {
        icon: 'phone',
        title: '문자 / 전화 문의',
        text: '신건 목사 010-7536-9369',
        note: '강의 중에는 전화를 받기 어려우니 문자를 남겨주시면 회신드립니다.',
        primary: { label: '문자 보내기', href: `sms:${site.phone.replace(/-/g, '')}` },
        secondary: { label: '전화 걸기', href: site.phoneHref },
      },
    ],
  },
  map: {
    eyebrow: '',
    title: '오시는 길',
    office: '빌드업 미니스트리 사무실',
    address: site.address,
    lines: [
      { name: '2호선', color: '#00a84d', exit: '1번 출구' },
      { name: '5호선', color: '#996cac', exit: '7번 출구' },
    ],
    station: '영등포구청역',
    walk: '도보 4분',
    steps: [
      { icon: 'subway', title: '영등포구청역에서 내리기 · 2호선 1번 출구 / 5호선 7번 출구', text: '' },
      { icon: 'walk', title: '양산로 97 길빌딩까지 도보 4분', text: '티맵 · 카카오맵 · 네이버지도에서 “빌드업미니스트리”를 검색하면 바로 안내됩니다.' },
      { icon: 'bell', title: '1층 인터폰으로 206호 호출', text: '건물 1층 현관 좌측 인터폰으로 호출(206호)하시면 문을 열어드립니다. 사무실은 2층입니다.' },
    ],
    apps: [
      { label: '네이버 지도 열기', href: links.naverMap, primary: true },
      { label: '카카오맵에서 보기', href: 'https://map.kakao.com/link/search/빌드업미니스트리' },
    ],
    copyLabel: '주소 복사',
  },
  parking: {
    title: '주차 안내',
    lead: '건물 내 주차가 어려워 인근 주차장을 이용합니다. 요금이 저렴한 순서로 정리했습니다.',
    lots: [
      { name: '영등포구청환승 공영주차장', type: '지상', price: '시간당 1,200원', walk: '도보 2분', discount: true },
      { name: '영등포근린공원주차장', type: '지하', price: '시간당 1,800원', walk: '도보 4분', discount: true },
      { name: '산경물산 민영주차장 (전기차충전소)', type: '지상', price: '시간당 2,000원', walk: '도보 2분', discount: false },
      { name: '영등포구청역 공영주차장', type: '지하', price: '시간당 3,120원', walk: '도보 2분', discount: true },
    ],
    discountNote: '다둥이 행복카드 할인',
    bestNote: '가장 저렴',
  },
};
