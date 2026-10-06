import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://soulrevolutionfestival.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  image: { layout: 'constrained' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
