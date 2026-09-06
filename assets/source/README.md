# 원본 자료 (2026-09-05 ~ 06 수집)

사이트 재구성에 쓴 원본 텍스트·이미지. 문구를 고치거나 새 과정을 추가할 때 참고한다.

## 페이지 텍스트 (`oopy-pages/`)

| 파일 | 출처 |
|---|---|
| home.txt | https://buildup365.com/ |
| shingun.txt | https://buildup.oopy.io/shingun (소개) |
| teaching.txt | https://buildup.oopy.io/teaching (교육 과정) |
| coaching.txt | https://buildup.oopy.io/coaching (코칭·상담) |
| sns.txt | https://buildup.oopy.io/sns (SNS·위치) |
| ask.txt | https://buildup.oopy.io/ask (강의 요청) |

## 교육과정 상세 (`oopy-courses/`)

각 과정의 oopy 상세 페이지 텍스트. 원본 주소는 `https://buildup.oopy.io/{page-id}` 이고, ID 목록은 `_page-ids.json`.

| 과정 | page id |
|---|---|
| 강점세미나 3기 (26년 2월) 월요일 부교역자부부 특별할인과정 | `2e734cda-35a4-800a-89f3-fb054225ba0e` |
| 커플(부부)코칭스쿨 (14기-토.저녁반) | `2e534cda-35a4-8091-a409-ca22bfb488ae` |
| 강점세미나 4기 (26년 3월) | `2e534cda-35a4-8087-b64b-f2e0acd4a31d` |
| 강점세미나5기(5월) 선교사 특별할인과정 | `34334cda-35a4-801b-b786-c82e27b7cb9d` |
| 강점세미나6기(6월) - 평일 오전 일반과정 | `2e734cda-35a4-8023-b87c-e52323dde29d` |
| 강점세미나7기(6월) 목회자부부 특별할인과정 | `34334cda-35a4-8095-8f66-f999b25e1a95` |
| 1day 세미나 - 크리스천의 재정관리 | `17434cda-35a4-803a-b9f4-fa544f4a22b7` |
| 1day 세미나 - 크리스천의 연애와 결 | `2e734cda-35a4-8053-ba3e-dc6985b72d5e` |
| 강점세미나 8기 (26년 8월) 주말 일반과정 | `2e734cda-35a4-802a-aad1-fc62a91005e6` |
| 커플(부부)코칭스쿨 (15기-토.저녁반) | `2e734cda-35a4-8080-ab36-c5c8fa49eab9` |
| Happy New Year 세미나 3기  | `2e734cda-35a4-80e0-9795-ceef769f3af3` |
| 1day 세미나 - 크리스천의 인간관계 | `2e734cda-35a4-800f-bce7-cbf6012c472c` (본문은 `src/data/courseDetails.ts` 에 반영) |

## 이미지 (`images/`)

- `00-…로고.jpg`, `01-…프로필.jpg`, `02~07-사역_사진_N.jpg`: buildup365.com 에 base64 로 임베드된 원본. `public/images/` 에 같은 파일이 ASCII 이름으로 복사되어 있다.
- `logo-original.jpg`: 로고 원본(720×720, 어두운 정사각형). `logo-mark.jpg` 는 심볼만, `logo-wide.jpg` 는 심볼+영문/한글 워드마크를 잘라낸 파생본이며 `public/images/` 에 같은 파일이 있다.
- `certificates-collage.webp`: 자격증 및 수료과정 페이지(https://buildup.oopy.io/a4c58f00-373a-4ab9-b952-f9110edd40dc)의 콜라주 원본. 12장으로 잘라 `public/images/certs/` 에 두었다.
- `teaching-five-areas.webp`: 교육 과정 페이지의 "교육과정의 5가지 영역" 도표 (Notion 첨부). 내용은 `src/data/content.ts` 의 `areas` 로 옮겼다.

## 다시 받기

```bash
curl -sL -A "Mozilla/5.0" https://buildup.oopy.io/teaching -o teaching.html   # 페이지 HTML 에 Notion recordMap 이 들어 있어 과정 ID 를 찾을 수 있다
```
