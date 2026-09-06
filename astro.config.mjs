// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://buildup365.com',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
});
