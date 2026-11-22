import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://brfbservices.ma',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
