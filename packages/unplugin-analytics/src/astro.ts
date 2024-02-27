import { kebabCase } from 'scule';
import { generate } from '@unplugin-analytics/core';

import type { Options } from './plugin';

import './env.d';

export default (options: Options = {}) => ({
  name: 'unplugin-analytics',
  hooks: {
    'astro:config:setup': async (astro: any) => {
      astro.config.vite.plugins ||= [];
      astro.config.vite.plugins.push(VitePlugin(options));
    }
  }
});

function VitePlugin(options: Options) {
  let config: any;

  const Component = `~analytics/component.astro`;

  return {
    name: 'unplugin-analytics:astro',
    configResolved(resolvedConfig: any) {
      config = resolvedConfig;
    },
    resolveId(id: string) {
      if (id === Component) return id;
    },
    async load(id: string) {
      if (id === Component) {
        if (options.dev && config.command === 'serve') {
          return ``;
        }

        const tags = generate(options.analytics ?? {});
        const rendered = tags.map((tag) => {
          const pieces: string[] = [];
          if (tag.defer) {
            pieces.push(`defer`);
          }
          if (tag.async) {
            pieces.push(`async`);
          }
          for (const [_key, _value] of Object.entries(tag.dataset ?? {})) {
            const key = kebabCase(`data-${_key}`);
            const value = escape(_value);
            pieces.push(`${key}="${value}"`);
          }

          if ('src' in tag) {
            return `<script src="${tag.src}" ${pieces.join(' ')}></script>`;
          } else {
            if (tag.type) {
              pieces.unshift(`type="${tag.type}"`);
            }
            return `<script ${pieces.join(' ')}>${tag.children}</script>`;
          }
        });

        return [...rendered].join('');
      }
    }
  };
}

function escape(text: string) {
  return text.replace(/"/g, `&quot;`);
}
