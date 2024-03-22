import { type Options, UnpluginAnalyticsRuntime, UnpluginAnalytics } from './plugin';

export default function (options: Options = {}) {
  return [UnpluginAnalytics.vite(options), UnpluginAnalyticsRuntime.vite(options)];
}
