import { createUnplugin } from 'unplugin';

import { type AnalyticsOptions, generate } from '@unplugin-analytics/core';

import { renderScriptTag } from '../../../vite-plugin-analytics/src/render';

export interface Options {
  /**
   * Whether inject scripts during development
   */
  dev?: boolean;

  analytics?: AnalyticsOptions;
}

export const UnpluginAnalyticsRuntime = createUnplugin<Options | undefined>((options = {}) => {
  const scripts: Record<string, () => string> = {
    clarity() {
      return [`export const clarity = window.clarity;`].join('\n');
    },
    umami() {
      return [`export const umami = window.umami;`].join('\n');
    }
  };
  const moduleNames = Object.keys(scripts).map((s) => `~analytics/${s}`);

  return {
    name: 'unplugin-analytics:runtime',
    resolveId(id) {
      if (moduleNames.includes(id)) {
        return `\0${id}`;
      }
    },
    loadInclude(id) {
      if (!id.startsWith('\0')) return false;
      id = id.slice(1);
      return moduleNames.includes(id);
    },
    async load(id) {
      if (!id.startsWith('\0')) return;
      id = id.slice(1 + `~analytics/`.length);

      if (id in scripts) {
        return scripts[id]();
      }
    }
  };
});

export const UnpluginAnalytics = createUnplugin<Options | undefined>((options = {}) => {
  let isDev = false;

  return {
    name: 'unplugin-analytics:html',
    vite: {
      configResolved(resolvedConfig) {
        isDev = resolvedConfig.command === 'serve';
      },
      transformIndexHtml(_html, ctx) {
        if (options.dev && isDev) {
          return;
        }

        const tags = generate(options.analytics ?? []);
        return tags.map(renderScriptTag).filter(Boolean);
      }
    }
  };
});
