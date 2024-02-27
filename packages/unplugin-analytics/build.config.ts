import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index', 'src/vite', 'src/nuxt'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true
  }
});
