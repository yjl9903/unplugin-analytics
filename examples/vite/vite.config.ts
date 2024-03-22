import { defineConfig } from 'vite';

import Analytics from '../../packages/unplugin-analytics/src/vite';

export default defineConfig({
  base: './',
  plugins: [
    Analytics({
      analytics: {
        umami: {
          src: `https://umami.onekuma.cn/script.js`,
          id: `19800483-25c2-4fde-8330-3e717591eabb`
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
