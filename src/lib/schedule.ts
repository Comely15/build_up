/**
 * /teaching/ 의 일정 계산 — 기수 라벨, 프로그램별 묶음, 연간 타임라인 좌표.
 * 데이터는 courses(courseDetails에서 파생)와 programs 만 읽는다.
 */
import { courses, programs, type Course, type Program } from '../data/content';

/* 기수 표기: "강점세미나 3기 · 부교역자부부 특별할인과정" → { gi: '3기', sub: '부교역자부부 특별할인과정' } */
export const label = (c: Course) => {
  const [head, ...rest] = c.title.split(' · ');
  const gi = head.match(/(\d+기)/)?.[1] ?? '';
  return { gi, sub: gi ? rest.join(' · ') : rest.join(' · ') || head };
};
export const fmt = (d: string) => {
  const [, m, dd] = d.split('-');
  return `${Number(m)}/${Number(dd)}`;
};
export const range = (c: Course) => (c.end ? `${fmt(c.start)} ~ ${fmt(c.end)}` : fmt(c.start));
export const rowId = (c: Course) => 'row-' + (c.slug ?? c.start);
/** 세부 페이지 속성 표의 날짜("2026. 8. 16") → "8/16" */
export const shortDate = (v: string) => v.replace(/^\d{4}\.\s*/, '').replace(/\.\s*/g, '/').replace(/\/$/, '');

const rank: Record<Course['status'], number> = { open: 0, full: 1, done: 2 };
export interface ProgramGroup {
  program: Program;
  active: Course[];
  past: Course[];
}
/** 프로그램별 기수 묶음: 모집중 → 모집완료 → 지난 기수(최근순) */
export const byProgram: ProgramGroup[] = programs.map((p) => {
  const list = courses.filter((c) => c.kind === p.kind).sort((a, b) => rank[a.status] - rank[b.status] || (a.start < b.start ? -1 : 1));
  return { program: p, active: list.filter((c) => c.status !== 'done'), past: list.filter((c) => c.status === 'done').reverse() };
});

/* ---------- 연간 타임라인: 1/1 기준 경과일 → 퍼센트 ---------- */
export const YEAR = 2026;
export const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
const doy = (d: string) => Math.round((Date.UTC(YEAR, Number(d.slice(5, 7)) - 1, Number(d.slice(8, 10))) - Date.UTC(YEAR, 0, 1)) / 86400000);
const pct = (d: string) => (doy(d) / 365) * 100;
/** 오늘 위치(%). 빌드 시점 기준이라 다시 배포해야 움직인다. 2026년이 아니면 표시하지 않는다 */
export const todayPct = (() => {
  const today = new Date();
  return today.getFullYear() === YEAR ? (doy(today.toISOString().slice(0, 10)) / 365) * 100 : null;
})();
const MIN_W = 4.2; // 막대 최소 너비(%)
const DAY = 100 / 365;
const PAD = 5 * DAY; // 막대를 실제 기간보다 양쪽 닷새씩 넉넉하게
const GAP = 1.5 * DAY; // 같은 줄 이웃 막대 사이 최소 간격
export interface Lane {
  c: Course;
  lane: number;
  left: number;
  width: number;
}
export const laneOf = (list: Course[]): Lane[] => {
  /* 1) 줄 배정 기준 범위: 기간 과정은 실제 기간, 하루짜리는 표시 폭(MIN_W) */
  const items = list.map((c) => {
    const isDot = !c.end;
    const l = pct(c.start);
    const coreL = isDot ? l + DAY / 2 - MIN_W / 2 : l;
    const coreR = isDot ? l + DAY / 2 + MIN_W / 2 : pct(c.end!) + DAY;
    return { c, isDot, coreL, coreR, lane: 0 };
  });
  const placed: { lane: number; l: number; r: number }[] = [];
  for (const it of items) {
    let lane = 0;
    while (placed.some((p) => p.lane === lane && it.coreL < p.r && it.coreR > p.l)) lane += 1;
    it.lane = lane;
    placed.push({ lane, l: it.coreL, r: it.coreR });
  }
  /* 2) 기간 막대는 양쪽 PAD 만큼 넓히되, 같은 줄 이웃과의 중간 지점(±GAP/2)을 넘지 않게 */
  return items.map((it) => {
    if (it.isDot) return { c: it.c, lane: it.lane, left: it.coreL, width: MIN_W };
    const same = items.filter((o) => o !== it && o.lane === it.lane);
    const prevR = Math.max(-Infinity, ...same.filter((o) => o.coreR <= it.coreL).map((o) => o.coreR));
    const nextL = Math.min(Infinity, ...same.filter((o) => o.coreL >= it.coreR).map((o) => o.coreL));
    const left = Math.max(it.coreL - PAD, (prevR + it.coreL) / 2 + GAP / 2);
    const right = Math.min(it.coreR + PAD, (it.coreR + nextL) / 2 - GAP / 2);
    return { c: it.c, lane: it.lane, left, width: Math.max(right - left, MIN_W) };
  });
};
