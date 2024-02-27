import { defineConfig } from 'astro/config';

import Analytics from '../../packages/unplugin-analytics/src/astro';

export default defineConfig({
  integrations: [
    Analytics({
      analytics: {
        umami: {
          src: `https://umami.onekuma.cn/script.js`,
          id: `a8602a4a-8d41-4df7-9797-5bd074785f2c`
        },
        plausible: {
          domain: `garden.onekuma.cn`
        },
        cloudflare: {
          beacon: `aa68fa3bf166467082bc79ba029b057f`
        },
        clarity: {
          id: `kwj19d7z4j`
        }
      }
    })
  ]
});
