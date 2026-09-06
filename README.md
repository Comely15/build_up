# buildup365 — 빌드업 미니스트리 홈페이지

https://buildup365.com/ 의 홈과 buildup.oopy.io 하위 페이지(소개 · 교육 과정 · 코칭·상담 · SNS·위치 · 강의 요청)를
**web-02(katanamrp.com) 디자인 DNA** 로 다시 지었다. 메인 컬러는 web-02 의 형광 노랑 대신 톤다운 네이비(`#293d69`). Astro + TypeScript, 런타임 의존성 0개, 정적 HTML/CSS/JS 출력.

## 실행

```bash
npm install      # 저장소 루트(comely15-web/)에서 한 번 — npm workspaces
npm run dev      # buildup365/ 안에서, http://localhost:4321
npm run build    # dist/ 생성
npm run preview  # dist/ 미리보기
npm run check    # Astro/TS 타입 체크
```

## 페이지

| 경로 | 원본 | 슬래브 순서 |
|---|---|---|
| `/` | buildup365.com | hero → 3 영역 → 교육 특징(연한 네이비, 마퀴) → CTA(네이비) |
| `/about/` | oopy /shingun | hero → 사명·영역·사역 → 대표 소개(프로필 + 아코디언) → 코칭 소감 캐러셀(흰) → 사역 갤러리 벤토 → 사역 현장 기록(다크그린 타임라인) → CTA |
| `/teaching/` | oopy /teaching | hero(모집중 카드) → 2026 연간 타임라인(프로그램 4행 × 12개월, 상태별 막대, 오늘 표시) → 프로그램 4 블록(정의 · 대상 · 기간 · 방식 + 2026 기수 목록, 지난 기수는 접힘) → 카카오채널 안내 → 특징 7 → CTA |
| `/coaching/` | oopy /coaching | hero → 코칭이란 → 인용(다크그린) → 대상·주제 + 유의 → 비용 플랜 2 → 요청 3단계 → 코치 소개(보라) → 후기 마소너리 → CTA |
| `/sns/` | oopy /sns | hero(빠른 연락 카드: 전화·카카오·이메일 + 복사) → 채널 4(브랜드 로고 타일, 채널별 콘텐츠 설명) → 문의 2(문자/전화 · 카카오채널) + 요청서 링크 → 오시는 길(노선 배지 · 3단계 · 네이버/카카오맵 · 주소 복사 · SVG 지도 카드 = 네이버 지도 링크) + 주차(스틸 네이비) → CTA |
| `/ask/` | oopy /ask | hero(요청서 버튼) → 강의 주제 4 → 강의·집회 현장(다크그린) → 요청 방법(네이비) |
| `/courses/{slug}/` | oopy 과정 상세 (예: `christian-relationships` = 1day 세미나 · 크리스천의 인간관계) | hero(모집 개요 카드: 상태·인원·참가비·속성 표) → 과정 안내(왜 · 3시간 내용 5 · 추천 대상) → 과정 특징 8 + 진행 180분(스틸 네이비) → 참가비 + 참여요건/스쿨가이드 6 → 강사소개(다크그린) → 참가신청(네이비: 유의사항 · 입금계좌 · 종합신청서 안내 · 함께 모집중인 과정) |

Google Form · 카카오채널 · 네이버 지도 · SNS · 자격증/인터뷰/사진 페이지는 원본의 외부 링크를 그대로 연결한다.

## 구조

```
docs/                     팀원용 문서 — EDITING(무엇을 어디서) · REQUESTS(요청 양식) · CHECKLIST(확인 순서)
scripts/verify.mjs        빌드 검증 (외부 링크 · 내부 앵커 · 과정 데이터 · 글자 크기 규칙) — npm run verify
assets/source/            원본 자료 (buildup365.com · oopy 캡처 텍스트, 원본 이미지)
public/images/            로고 · 프로필 · 사역 사진 · 앨범(album/) · 자격증(certs/) · 도서 표지(books/)
src/
├─ data/
│  ├─ content.ts          진입점 — 아래 파일들을 모아 내보내기만 한다 (페이지는 여기서만 import)
│  ├─ site.ts             기관 정보 · 외부 링크 · 메뉴 · 푸터 · 공용 CTA
│  ├─ courseDetails.ts    ★ 교육과정 12건의 단일 출처 (kind · start/end · status · 속성 표 · 세부 내용)
│  ├─ courses.ts          courses(목록 요약, courseDetails에서 자동 생성) · programs 4종 · enrollment · instructor
│  ├─ types.ts            CourseStatus · CourseKind · 라벨
│  ├─ home / about / teaching / coaching / sns / ask .ts   페이지별 문구
│  ├─ voices.ts           코칭 후기
│  ├─ gallery.ts          갤러리 문구 · 사역 현장 기록
│  └─ album.ts            갤러리 앨범 사진 목록 (생성 스크립트 산출물)
├─ lib/schedule.ts        기수 라벨 · 프로그램별 묶음 · 연간 타임라인 좌표 계산
├─ styles/tokens.css      색 · 글자 크기 사다리(14/16/18/20/24/32/42/47 + 40) · 간격 · 모서리
├─ styles/global.css      전역 스타일 (.card/.badge/.chip/.eyebrow 등)
├─ layouts/Base.astro     <html lang="ko">, Header → main → Footer
├─ components/
│  ├─ Slab · Header · Footer · PageHero · ContactCta · Logo · Wordmark · Icon · BackToTop
│  ├─ teaching/           OpenNow(지금 모집중) · CourseFinder(선택 안내) · YearTimeline(연간 일정) · ProgramBlock(프로그램 블록)
│  ├─ course/             CourseTicket(히어로 티켓) · CourseApply(참가신청 슬래브) · ApplyBar(하단 고정 바)
│  └─ sns/                QuickContact · ChannelCards · InquiryCards · MapCard · ParkingList
├─ sections/              홈 섹션: Hero · Pillars · Method
├─ pages/                 index · about · teaching · coaching · gallery · sns · ask · courses/[slug]
└─ scripts/               header · reveal · filter(연도 필터) · copy(클립보드) · masonry · totop · main
```

### 명령

```bash
npm run dev      # 개발 서버 http://localhost:4321
npm run check    # Astro/TS 타입 체크
npm run verify   # 빌드 + 링크·앵커·과정 데이터·글자 크기 검증 (배포 전 필수)
npm run build    # dist/ 생성
npm run preview  # dist/ 미리보기
```

### 콘텐츠 바꾸기

- **기수 추가 · 상태 변경 · 일정 · 비용 · 세부 내용**: `src/data/courseDetails.ts` 한 곳. 목록·타임라인·세부 페이지가 자동으로 따라온다.
- **페이지 문구**: `src/data/` 의 페이지별 파일. 연락처·링크·메뉴는 `site.ts`.
- **색·글자·간격**: `src/styles/tokens.css`. font-size 는 토큰만 쓴다(`npm run verify` 가 검사).
- 자세한 순서와 요청 양식은 `docs/` 참고.
