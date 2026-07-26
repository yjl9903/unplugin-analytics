import type { Plugin } from 'vite';

import { type Options, UnpluginAnalyticsRuntime, UnpluginAnalytics } from './plugin';

export default function (options: Options = {}): Plugin[] {
  return [UnpluginAnalytics.vite(options), UnpluginAnalyticsRuntime.vite(options)];
}
