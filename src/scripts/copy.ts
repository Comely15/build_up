/**
 * [data-copy="텍스트"] 버튼을 누르면 클립보드에 복사하고 잠시 "복사됨" 으로 바꾼다.
 */
export function initCopy() {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
    const original = btn.innerHTML;
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy ?? '';
      try {
        await navigator.clipboard.writeText(text);
        btn.classList.add('is-copied');
        btn.setAttribute('aria-live', 'polite');
        btn.innerHTML = `<span>${btn.dataset.copied ?? '복사됨'}</span>`;
        window.setTimeout(() => {
          btn.classList.remove('is-copied');
          btn.innerHTML = original;
        }, 1600);
      } catch {
        window.prompt('아래 내용을 복사하세요', text);
      }
    });
  });
}
