import type { ScriptTag } from '../tag';

import { UmamiKey, Umami } from './umami';
import { PlausibleKey, Plausible } from './plausible';

export const providers = new Map<string, (options: any) => ScriptTag | undefined>([
  [UmamiKey, Umami],
  [PlausibleKey, Plausible]
]);
