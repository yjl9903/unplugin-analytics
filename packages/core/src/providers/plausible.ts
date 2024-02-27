import type { ScriptTag } from '../tag';

export const PlausibleKey = 'plausible';

export interface PlausibleOptions {
  /**
   * @default `https://plausible.io/js/script.js`
   */
  src?: string;

  domain: string | undefined;
}

export function Plausible(options: PlausibleOptions): ScriptTag | undefined {
  const src = resolveSrc(options.src ?? `https://plausible.io/js/script.js`);
  const domain = options.domain;

  if (!domain) return undefined;

  return {
    src,
    defer: true,
    dataset: {
      domain
    }
  };
}

function resolveSrc(src: string) {
  const RE = /https:\/\/(.*)\/js\/script\.js/;
  if (RE.test(src)) {
    return src;
  }
  return `https://${src}/js/script.js`;
}
