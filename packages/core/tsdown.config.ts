import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: {
    generator: 'oxc'
  },
  clean: true,
  target: 'node20'
});
