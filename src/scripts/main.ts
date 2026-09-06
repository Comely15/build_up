import { initHeader } from './header';
import { initReveal } from './reveal';
import { initFilters } from './filter';
import { initCopy } from './copy';
import { initMasonry } from './masonry';
import { initBackToTop } from './totop';

const boot = () => {
  initHeader();
  initReveal();
  initFilters();
  initCopy();
  initMasonry();
  initBackToTop();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
