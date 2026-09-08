import { initHeader } from './header';
import { initReveal } from './reveal';
import { initCopy } from './copy';
import { initMasonry } from './masonry';
import { initBackToTop } from './totop';

const boot = () => {
  initHeader();
  initReveal();
  initCopy();
  initMasonry();
  initBackToTop();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
