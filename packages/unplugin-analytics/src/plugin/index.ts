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
  let config: any;

  return {
    name: 'unplugin-analytics',
    vite: {
      configResolved(resolvedConfig: any) {
        config = resolvedConfig;
      },
      transformIndexHtml(_html, ctx) {
        if (options.dev && config.command === 'serve') {
          return;
        }

        const tags = generate(options.analytics ?? []);
        return tags.map(renderScriptTag).filter(Boolean);
      }
    }
  };
});
