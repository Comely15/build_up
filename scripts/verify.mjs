/**
 * 빌드 결과(dist/) 검증. `npm run verify` 로 실행한다 (빌드 포함).
 *  1. 외부 링크가 허용 목록 밖으로 나가지 않는지 (oopy 등 옛 주소 금지)
 *  2. 내부 링크·앵커가 실제 존재하는 페이지/요소를 가리키는지
 *  3. 교육과정 데이터 정합성: 모든 과정에 slug·kind·start(추후모집 제외)·status 가 있고 세부 페이지가 생성됐는지
 *  4. 글자 크기 규칙: src 안에 px 단위 font-size 가 없는지 (토큰만 허용)
 * 문제가 있으면 목록을 출력하고 종료 코드 1 로 끝난다.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/* fileURLToPath 라야 Windows 에서도 "C:\..." 로 풀린다 (URL.pathname 은 "/C:/..." 가 된다) */
const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIST = path.join(ROOT, 'dist');
const problems = [];
const note = (m) => problems.push(m);

/* ---------- dist 페이지 수집 ---------- */
if (!fs.existsSync(DIST)) {
  console.error('dist/ 가 없습니다. 먼저 `npm run build` 를 실행하세요.');
  process.exit(1);
}
const htmlFiles = fs.readdirSync(DIST, { recursive: true }).filter((f) => f.endsWith('index.html'));
const pages = new Map(); // '/about/' -> html
for (const f of htmlFiles) {
  const route = '/' + f.replace(/index\.html$/, '').replace(/\\/g, '/');
  pages.set(route, fs.readFileSync(path.join(DIST, f), 'utf8'));
}

/* ---------- 1. 외부 링크 허용 목록 ---------- */
const ALLOWED_HOSTS = [
  'forms.gle',
  'pf.kakao.com',
  'naver.me',
  'map.kakao.com',
  'www.instagram.com',
  'www.youtube.com',
  'www.facebook.com',
  'jocoach.netlify.app',
  'www.gallup.com',
  'www.chosun.com',
  'www.yes24.com',
  'blog.naver.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
];
const BANNED = ['oopy.io', 'lazyrockets.com'];
for (const [route, html] of pages) {
  /* <a href> 만 검사한다 (canonical · 폰트 링크 제외) */
  for (const m of html.matchAll(/<a\b[^>]*\shref="(https?:\/\/[^"]+)"/g)) {
    const host = new URL(m[1]).host;
    if (BANNED.some((b) => host.endsWith(b))) note(`${route}: 금지된 외부 링크 ${m[1]}`);
    else if (!ALLOWED_HOSTS.includes(host)) note(`${route}: 허용 목록에 없는 외부 링크 ${m[1]} (scripts/verify.mjs 의 ALLOWED_HOSTS 에 추가하거나 링크를 확인하세요)`);
  }
}

/* ---------- 2. 내부 링크 · 앵커 ---------- */
for (const [route, html] of pages) {
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(/href="(\/[^"#]*)(#[^"]*)?"/g)) {
    const [, p, hash] = m;
    if (/\.(svg|png|jpg|jpeg|webp|css|js|xml|txt)$/.test(p)) {
      if (!fs.existsSync(path.join(DIST, p))) note(`${route}: 파일 없음 ${p}`);
      continue;
    }
    const target = p.endsWith('/') ? p : p + '/';
    if (!pages.has(target)) note(`${route}: 페이지 없음 ${p}`);
    else if (hash && hash.length > 1) {
      const targetIds = new Set([...pages.get(target).matchAll(/\sid="([^"]+)"/g)].map((x) => x[1]));
      if (!targetIds.has(hash.slice(1))) note(`${route}: 앵커 없음 ${p}${hash}`);
    }
  }
  for (const m of html.matchAll(/href="#([^"]+)"/g)) {
    if (!ids.has(m[1])) note(`${route}: 같은 페이지 앵커 없음 #${m[1]}`);
  }
}

/* ---------- 3. 교육과정 데이터 정합성 ---------- */
const details = fs.readFileSync(path.join(ROOT, 'src/data/courseDetails.ts'), 'utf8');
const slugs = [...details.matchAll(/^\s{4}slug: '([a-z0-9-]+)',/gm)].map((m) => m[1]);
if (slugs.length === 0) note('courseDetails.ts 에서 slug 를 찾지 못했습니다');
for (const slug of slugs) {
  if (!pages.has(`/courses/${slug}/`)) note(`세부 페이지가 빌드되지 않음: /courses/${slug}/`);
}
const entries = details.split(/^\s{2}\{\s*$/m).slice(1);
for (const e of entries) {
  const slug = e.match(/slug: '([a-z0-9-]+)'/)?.[1];
  if (!slug) continue;
  const st = e.match(/^\s{4}status: '(\w+)'/m)?.[1];
  /* start 는 추후모집(soon)일 때만 비워 둘 수 있다 */
  const required = st === 'soon' ? ['kind', 'status', 'courseTitle', 'series', 'name', 'form'] : ['kind', 'start', 'status', 'courseTitle', 'series', 'name', 'form'];
  for (const key of required) {
    if (!new RegExp(`^\\s{4}${key}: `, 'm').test(e)) note(`courseDetails.ts ${slug}: '${key}' 누락`);
  }
  const dates = [...e.matchAll(/^\s{4}(start|end): '(\d{4}-\d{2}-\d{2})'/gm)];
  for (const [, k, v] of dates) if (Number.isNaN(Date.parse(v))) note(`courseDetails.ts ${slug}: ${k} 날짜 형식 오류 ${v}`);
  if (st && !['open', 'full', 'soon', 'done'].includes(st)) note(`courseDetails.ts ${slug}: status 값 오류 '${st}'`);
}

/* ---------- 4. 글자 크기 규칙 ---------- */
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]));
for (const f of walk(path.join(ROOT, 'src')).filter((f) => /\.(astro|css)$/.test(f))) {
  if (/Wordmark\.astro$/.test(f)) continue;
  const src = fs.readFileSync(f, 'utf8');
  /* 규칙 단위로 보되, 아이콘 크기(.icon 선택자)는 font-size 로 크기를 정하므로 제외 */
  for (const rule of src.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const [, selector, body] = rule;
    if (/icon/.test(selector)) continue;
    for (const m of body.matchAll(/font-size:\s*([0-9.]+)px/g)) {
      note(`${path.relative(ROOT, f)}: "${selector.trim().split('\n').pop().trim()}" font-size ${m[1]}px — 토큰(--t-*)만 쓰세요`);
    }
  }
}

/* ---------- 결과 ---------- */
if (problems.length) {
  console.error(`검증 실패 ${problems.length}건`);
  for (const p of problems) console.error(' -', p);
  process.exit(1);
}
console.log(`검증 통과: 페이지 ${pages.size}개, 과정 ${slugs.length}건, 외부 링크·앵커·데이터·글자 크기 이상 없음`);
