/**
 * 위로가기 버튼 [data-totop].
 *  - 스크롤이 뷰포트 높이의 80% 를 넘으면 표시, 그 위로 올라오면 숨김
 *  - 과정 상세의 하단 신청 바 [data-applybar] 가 보이면 그만큼 위로 올린다
 *  - 클릭: 맨 위로 (prefers-reduced-motion 이면 즉시)
 */
export function initBackToTop() {
  const btn = document.querySelector<HTMLButtonElement>('[data-totop]');
  if (!btn) return;
  const bar = document.querySelector<HTMLElement>('[data-applybar]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ticking = false;
  const update = () => {
    const show = window.scrollY > window.innerHeight * 0.8;
    btn.hidden = !show;
    btn.classList.toggle('is-visible', show);
    btn.classList.toggle('totop--lifted', !!bar && !bar.hidden);
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  window.addEventListener('resize', update);
  update();
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    document.getElementById('main')?.focus({ preventScroll: true });
  });
}
