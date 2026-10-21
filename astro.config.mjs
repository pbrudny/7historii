import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://7historii.pl',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
