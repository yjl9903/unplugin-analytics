import type { ScriptTag } from '../tag';

export const UmamiKey = 'umami';

export interface UmamiOptions {
  /**
   * @default `https://us.umami.is/script.js`
   */
  src?: string;

  /**
   * data-website-id
   */
  id: string | undefined;

  /**
   * data-host-url
   *
   * By default, Umami will send data to wherever the script is located. You can override this to send data to another location.
   *
   * @see https://umami.is/docs/tracker-configuration#data-host-url
   */
  hostUrl?: string;

  /**
   * data-auto-track
   *
   * By default, Umami tracks all pageviews and events for you automatically. You can disable this behavior and track events yourself using the tracker functions.
   *
   * @default true
   *
   * @see https://umami.is/docs/tracker-configuration#data-auto-track
   */
  autoTrack?: boolean;

  /**
   * data-domains
   *
   * If you want the tracker to only run on specific domains, you can add them to your tracker script. This is a comma delimited list of domain names. Helps if you are working in a staging/development environment.
   *
   * @see https://umami.is/docs/tracker-configuration#data-domains
   */
  domains?: string[];

  /**
   * data-tag
   *
   * If you want the tracker to collect events under a specific tag. Events can be filtered in the dashboard by a specific tag.
   *
   * @see https://umami.is/docs/tracker-configuration#data-tag
   */
  tag?: string;

  /**
   * data-exclude-search
   *
   * If you don't want to collect the hash value from the URL.
   *
   * @see https://umami.is/docs/tracker-configuration#data-exclude-search
   */
  excludeSearch?: boolean;

  /**
   * data-exclude-hash
   *
   * If you don't want to collect the hash value from the URL.
   *
   * @see https://umami.is/docs/tracker-configuration#data-exclude-hash
   */
  excludeHash?: boolean;

  /**
   * data-do-not-track
   *
   * Respect user's Do Not Track browser setting.
   *
   * @see https://umami.is/docs/tracker-configuration#data-do-not-track
   */
  doNotTrack?: boolean;
}

export function Umami(options: UmamiOptions): ScriptTag | undefined {
  const src = resolveSrc(options.src ?? `https://us.umami.is/script.js`);
  const websiteId = options.id;

  if (!websiteId) return undefined;

  return {
    src,
    defer: true,
    dataset: {
      websiteId,
      hostUrl: options.hostUrl,
      autoTrack: options.autoTrack === false ? 'false' : undefined,
      domains: options.domains?.join(','),
      tag: options.tag,
      excludeSearch: options.excludeSearch ? 'true' : undefined,
      excludeHash: options.excludeHash ? 'true' : undefined,
      doNotTrack: options.doNotTrack ? 'true' : undefined
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
