import { kebabCase } from 'scule';

import { type AnalyticsOptions, generate } from '@unplugin-analytics/core';

import { defineNuxtPlugin, useHead, useRuntimeConfig } from '#imports';

export default defineNuxtPlugin({
  parallel: true,
  setup() {
    // Skip dev mode
    if (import.meta.dev) return;

    const options = useRuntimeConfig().public.analytics as AnalyticsOptions;
    const tags = generate(options ?? {});

    useHead({
      script: tags.map((tag) => {
        const desc: any = {
          async: tag.async,
          defer: tag.defer
        };

        for (const [key, value] of Object.entries(tag.dataset ?? {})) {
          desc[kebabCase(`data-${key}`)] = value;
        }

        if ('src' in tag) {
          desc.src = tag.src;
        } else {
          desc.type = tag.type;
          desc.children = tag.children;
        }

        return desc;
      })
    });
  }
});
