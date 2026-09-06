/**
 * [data-reveal] 요소가 뷰포트에 들어오면 is-visible. 한 번만.
 * prefers-reduced-motion 이면 즉시 표시(CSS 가 처리) — 여기서도 바로 켠다.
 */
export function initReveal() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!els.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          (en.target as HTMLElement).classList.add('is-visible');
          io.unobserve(en.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
  );
  els.forEach((el) => io.observe(el));
}
