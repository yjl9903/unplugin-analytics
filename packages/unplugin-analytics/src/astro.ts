import type { Options } from './plugin';

export default (options: Options = {}) => ({
  name: 'unplugin-analytics',
  hooks: {
    'astro:config:setup': async (astro: any) => {
      astro.config.vite.plugins ||= [];
      astro.config.vite.plugins.push({});
    }
  }
});

function VitePlugin() {
  return {
    name: 'unplugin-analytics:astro'
  };
}
