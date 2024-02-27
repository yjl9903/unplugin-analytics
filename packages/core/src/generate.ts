import type { AllProviders, AnalyticsOptions } from './types';

import { providers } from './providers';

export function generate(options: AnalyticsOptions) {
  const resolvedOptions = resolveOptions(options);

  return filterDef(
    resolvedOptions.map((options) => {
      const provider = providers.get(options.provider);
      if (provider) {
        return provider(options);
      } else {
        return undefined;
      }
    })
  );
}

function resolveOptions(options: AnalyticsOptions): AllProviders[] {
  if (Array.isArray(options)) {
    return filterDef(options);
  }
  const items = Object.entries(options);
  return filterDef(items.map((item) => ({ ...item[1], provider: item[0] } as AllProviders)));
}

function filterDef<T>(arr: Array<T | null | undefined>): T[] {
  return arr.filter((o: T | null | undefined): o is T => o !== null && o !== undefined);
}
