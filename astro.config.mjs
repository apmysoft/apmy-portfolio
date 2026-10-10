// @ts-check
import { defineConfig } from 'astro/config';

import externalLinks from './src/utils/rehype-external-links.mjs';
import localImages from './src/utils/rehype-local-images.mjs';

import basePaths from './src/utils/rehype-base-paths.mjs';

const preview = process.env.APMY_PAGES_PREVIEW === '1';
const base = preview ? '/apmy-portfolio/' : '/';

// https://astro.build/config
export default defineConfig({
  site: preview ? 'https://apmysoft.github.io' : 'https://apmy.es',
  base,
  trailingSlash: 'always',
  markdown: { rehypePlugins: [[externalLinks, { site: 'https://apmy.es' }], localImages, [basePaths, { base }]] }
});
