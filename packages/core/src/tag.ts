import type { Prettify } from './utils';

export type ScriptTag = Prettify<
  ({ src: string } | { children: string; type?: string }) & {
    key?: string;

    async?: boolean;

    defer?: boolean;

    dataset?: Record<string, string | undefined | null>;
  }
>;
