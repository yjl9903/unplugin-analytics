import type { UmamiKey, UmamiOptions } from './providers/umami';
import type { PlausibleKey, PlausibleOptions } from './providers/plausible';
import type { CloudflareKey, CloudflareOptions } from './providers/cloudflare';

// See https://twitter.com/mattpocockuk/status/1622730173446557697
// export type Identity<T> = T;
// type Prettify<T> = Identity<{ [K in keyof T]: T[K] }>
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type WithProvider<T extends string, U> = Prettify<{ provider: T } & U>;

export type AllProviders =
  | WithProvider<typeof UmamiKey, UmamiOptions>
  | WithProvider<typeof PlausibleKey, PlausibleOptions>
  | WithProvider<typeof CloudflareKey, CloudflareOptions>;

export type AnalyticsOptions =
  | {
      umami?: UmamiOptions;
      plausible?: PlausibleOptions;
      cloudflare?: CloudflareOptions;
    }
  | Array<AllProviders | null | undefined>;
