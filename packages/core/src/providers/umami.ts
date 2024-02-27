import type { ScriptTag } from '../tag';

export const UmamiKey = 'umami';

export interface UmamiOptions {
  /**
   * @default `https://us.umami.is/script.js`
   */
  src?: string;

  id: string;
}

export function Umami(options: UmamiOptions): ScriptTag {
  const src = resolveSrc(options.src ?? `https://us.umami.is/script.js`);
  const websiteId = options.id;

  return {
    src,
    defer: true,
    dataset: {
      websiteId
    }
  };
}

function resolveSrc(src: string) {
  const RE = /https:\/\/(.*)\/script\.js/;
  if (RE.test(src)) {
    return src;
  }
  return `https://${src}/script.js`;
}
