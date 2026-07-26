import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    entry: [
      'src/index.ts',
      'src/vite.ts',
      'src/nuxt.ts',
      'src/astro.ts',
      'src/vitepress.ts'
    ],
    format: ['esm'],
    dts: {
      generator: 'oxc'
    },
    clean: true,
    target: 'node20'
  },
  {
    entry: {
      'plugins/analytics': 'src/nuxt/runtime/plugins/analytics.ts'
    },
    outDir: 'dist/runtime',
    format: ['esm'],
    deps: {
      neverBundle: ['#imports']
    },
    dts: false,
    copy: [
      {
        from: 'src/nuxt/runtime/plugins/analytics.d.ts',
        to: 'dist/runtime/plugins'
      }
    ],
    clean: false,
    target: 'node20'
  }
]);
