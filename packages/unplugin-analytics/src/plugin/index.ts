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

export const UnpluginAnalytics = createUnplugin<Options | undefined>((options = {}) => {
  const tags = generate(options.analytics ?? []);

  return {
    name: 'unplugin-analytics',
    vite: {
      transformIndexHtml(_html, ctx) {
        if (options.dev && ctx.server) {
          return;
        }
        return tags.map(renderScriptTag).filter(Boolean);
      }
    }
  };
});
