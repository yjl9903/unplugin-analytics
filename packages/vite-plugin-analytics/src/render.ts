import type { HtmlTagDescriptor } from 'vite';

import { kebabCase } from 'scule';

import type { ScriptTag } from '@unplugin-analytics/core';

export function renderScriptTag(tag: ScriptTag) {
  const desc: HtmlTagDescriptor = {
    tag: 'script',
    attrs: {}
  };
  if (tag.async) {
    desc.attrs!.async = true;
  }
  if (tag.defer) {
    desc.attrs!.defer = true;
  }
  for (const [key, value] of Object.entries(tag.dataset ?? {})) {
    desc.attrs![kebabCase(`data-${key}`)] = value;
  }

  if ('src' in tag) {
    desc.attrs!.src = tag.src;
  } else {
    desc.children = tag.children;
  }

  return desc;
}
