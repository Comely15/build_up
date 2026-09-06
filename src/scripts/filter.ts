/**
 * 필터 탭. [data-filter] 안의 [data-filter-btn value] 를 누르면
 * [data-filter-item status] 중 value 와 다른 것을 숨긴다 ('all' 은 전부).
 */
export function initFilters() {
  document.querySelectorAll<HTMLElement>('[data-filter]').forEach((root) => {
    const btns = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-filter-btn]'));
    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-filter-item]'));
    const empty = root.querySelector<HTMLElement>('[data-filter-empty]');
    const apply = (value: string) => {
      let shown = 0;
      items.forEach((it) => {
        const match = value === 'all' || it.dataset.filterItem === value;
        it.hidden = !match;
        if (match) shown++;
      });
      btns.forEach((b) => {
        const on = b.dataset.filterBtn === value;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      if (empty) empty.hidden = shown > 0;
    };
    btns.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filterBtn ?? 'all')));
    apply(root.dataset.filter || 'all');
  });
}
