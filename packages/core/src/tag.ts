export interface ScriptTag {
  key?: string;

  src: string;

  async?: boolean;

  defer?: boolean;

  children?: string;

  dataset?: Record<string, string>;
}
