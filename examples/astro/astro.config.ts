import { defineConfig } from 'astro/config';

import Analytics from '../../packages/unplugin-analytics/src/astro';

export default defineConfig({
  integrations: [Analytics()]
});
