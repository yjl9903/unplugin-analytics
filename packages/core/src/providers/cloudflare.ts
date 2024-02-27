import type { ScriptTag } from '../tag';

export const CloudflareKey = 'cloudflare';

export interface CloudflareOptions {
  /**
   * @default `https://static.cloudflareinsights.com/beacon.min.js`
   */
  src?: string;

  beacon: string | undefined;
}

export function Cloudflare(options: CloudflareOptions): ScriptTag | undefined {
  const src = options.src ?? `https://static.cloudflareinsights.com/beacon.min.js`;
  const beacon = options.beacon;

  if (!beacon) return undefined;

  return {
    src,
    defer: true,
    dataset: {
      cfBeacon: `{"token": "${beacon}"}`
    }
  };
}
