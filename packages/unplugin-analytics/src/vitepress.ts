import { kebabCase } from 'scule';

import { type AnalyticsOptions, generate } from '@unplugin-analytics/core';

export function injectScriptTags(options: AnalyticsOptions = {}) {
  return (ctx: any) => {
    if (!ctx.head) return;

    const tags = generate(options);
    ctx.head ||= [];
    ctx.head.push(
      ...tags
        .map((tag) => {
          const desc: ['script', Record<string, string | undefined>, string] = ['script', {}, ''];

          for (const [key, value] of Object.entries(tag.dataset ?? {})) {
            if (value === undefined || value === null) continue;
            desc[1][kebabCase(`data-${key}`)] = value;
          }

          if ('src' in tag) {
            desc[1].src = tag.src;
          } else {
            if (tag.type) {
              desc[1].type = tag.type;
            }
            desc[2] = tag.children;
          }

          return desc;
        })
        .filter(Boolean)
    );
  };
}
