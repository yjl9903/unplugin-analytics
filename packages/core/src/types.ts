import type { UmamiKey, UmamiOptions } from './providers/umami';
import type { ClarityKey, ClarityOptions } from './providers/clarity';
import type { PlausibleKey, PlausibleOptions } from './providers/plausible';
import type { CloudflareKey, CloudflareOptions } from './providers/cloudflare';

import type { Prettify } from './utils';

export type WithProvider<T extends string, U> = Prettify<{ provider: T } & U>;

export type AllProviders =
  | WithProvider<typeof UmamiKey, UmamiOptions>
  | WithProvider<typeof ClarityKey, ClarityOptions>
  | WithProvider<typeof PlausibleKey, PlausibleOptions>
  | WithProvider<typeof CloudflareKey, CloudflareOptions>;

export type AnalyticsOptions =
  | {
      umami?: UmamiOptions;
      clarity?: ClarityOptions;
      plausible?: PlausibleOptions;
      cloudflare?: CloudflareOptions;
    }
  | Array<AllProviders | null | undefined>;
