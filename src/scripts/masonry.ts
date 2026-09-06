/**
 * 순서를 지키는 마소너리. CSS columns 는 위→아래로 채워서 시간순이 세로로 흐르므로,
 * [data-masonry] 는 grid(열 N, 행 단위 8px) 로 두고 각 아이템의 실제 높이만큼 grid-row span 을 준다.
 * 이미지에 width/height 가 있어 로드 전에도 높이가 확정된다. 리사이즈·필터 변경 뒤 다시 잰다.
 */
export function initMasonry() {
  const roots = Array.from(document.querySelectorAll<HTMLElement>('[data-masonry]'));
  if (!roots.length) return;
  const layout = (root: HTMLElement) => {
    const cs = getComputedStyle(root);
    const unit = parseFloat(cs.gridAutoRows) || 8;
    const gap = parseFloat(cs.rowGap) || 0;
    Array.from(root.children).forEach((el) => {
      const item = el as HTMLElement;
      if (item.hidden) return;
      item.style.gridRowEnd = 'auto';
      const inner = item.firstElementChild as HTMLElement | null;
      const h = (inner ?? item).getBoundingClientRect().height;
      item.style.gridRowEnd = `span ${Math.max(1, Math.ceil((h + gap) / (unit + gap)))}`;
    });
  };
  const all = () => roots.forEach(layout);
  all();
  window.addEventListener('load', all, { once: true });
  let raf = 0;
  const schedule = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(all);
  };
  window.addEventListener('resize', schedule);
  document.fonts?.ready.then(schedule);
  roots.forEach((root) => {
    root.querySelectorAll('img').forEach((img) => img.addEventListener('load', schedule));
    const filterRoot = root.closest<HTMLElement>('[data-filter]');
    filterRoot?.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).closest('[data-filter-btn]')) setTimeout(all, 0);
    });
  });
}
