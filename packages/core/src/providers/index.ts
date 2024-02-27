import type { ScriptTag } from '../tag';

import { UmamiKey, Umami } from './umami';
import { ClarityKey, Clarity } from './clarity';
import { PlausibleKey, Plausible } from './plausible';
import { CloudflareKey, Cloudflare } from './cloudflare';

export const providers = new Map<string, (options: any) => ScriptTag | undefined>([
  [UmamiKey, Umami],
  [ClarityKey, Clarity],
  [PlausibleKey, Plausible],
  [CloudflareKey, Cloudflare]
]);
