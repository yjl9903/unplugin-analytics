import type { ScriptTag } from '../tag';

export const PlausibleKey = 'plausible';

export interface PlausibleOptions {
  /**
   * @default `https://plausible.io/js/script.js`
   */
  src?: string;

  domain: string;
}

export function Plausible(options: PlausibleOptions): ScriptTag {
  const src = options.src ?? `https://plausible.io/js/script.js`;
  const domain = options.domain;

  return {
    src,
    defer: true,
    dataset: {
      domain
    }
  };
}
