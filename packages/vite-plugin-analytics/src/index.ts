import type { Plugin, ResolvedConfig } from 'vite';

import { type AnalyticsOptions, generate } from '@unplugin-analytics/core';

import { renderScriptTag } from './render';

interface Options {
  /**
   * Whether inject scripts during development
   */
  dev?: boolean;

  analytics?: AnalyticsOptions;
}

export default function Analytics(options: Options = {}): Plugin {
  let config: ResolvedConfig;
  const tags = generate(options.analytics ?? []);

  return {
    name: 'vite-plugin-analytics',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    transformIndexHtml() {
      // Skip transform when dev is true and during serve mode
      if (options.dev && config.command === 'serve') {
        return;
      }
      return tags.map(renderScriptTag).filter(Boolean);
    }
  };
}
