/**
 * 헤더 동작.
 *  - 스크롤 > 10px : is-scrolled (투명 → #f9f9f7 바 + 그림자)
 *  - 아래로 스크롤 : is-hidden, 위로 스크롤 : 다시 표시 (headroom)
 *  - 모바일 버거, Esc 로 닫기
 */
export function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;

  let lastY = window.scrollY;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 10);
    if (y > lastY + 6 && y > 160 && !header.querySelector('.is-open')) {
      header.classList.add('is-hidden');
    } else if (y < lastY - 6 || y <= 10) {
      header.classList.remove('is-hidden');
    }
    lastY = y;
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
  update();

  const burger = header.querySelector<HTMLButtonElement>('[data-burger]');
  const nav = header.querySelector<HTMLElement>('[data-nav]');
  const closeNav = () => {
    nav?.classList.remove('is-open');
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', '메뉴 열기');
  };
  burger?.addEventListener('click', () => {
    const open = nav?.classList.toggle('is-open') ?? false;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
  window.matchMedia('(min-width: 861px)').addEventListener('change', (e) => {
    if (e.matches) closeNav();
  });
}
