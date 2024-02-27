import type { Plugin } from 'vite';

import { type AnalyticsOptions, generate } from '@unplugin-analytics/core';

export interface Options {
  analytics?: AnalyticsOptions;
}

export default function Analytics(options: Options = {}): Plugin {
  const tags = generate(options.analytics ?? []);

  return {
    name: 'vite-plugin-analytics',
    transformIndexHtml() {}
  };
}
