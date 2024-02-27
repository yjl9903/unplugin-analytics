import type { ScriptTag } from '../tag';

export const CloudflareKey = 'cloudflare';

export interface CloudflareOptions {
  /**
   * @default `https://static.cloudflareinsights.com/beacon.min.js`
   */
  src?: string;

  beacon: string;
}

export function Cloudflare(options: CloudflareOptions): ScriptTag {
  const src = options.src ?? `https://static.cloudflareinsights.com/beacon.min.js`;
  const beacon = options.beacon;

  return {
    src,
    defer: true,
    dataset: {
      cfBeacon: `{"token": "${beacon}"}`
    }
  };
}
