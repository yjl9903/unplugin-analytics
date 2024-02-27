import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    'src/index.ts',
    'src/vite.ts',
    'src/nuxt.ts',
    'src/astro.ts',
    'src/vitepress.ts',
    { input: 'src/nuxt/runtime/', outDir: `dist/runtime`, ext: 'mjs' }
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true
  }
});
