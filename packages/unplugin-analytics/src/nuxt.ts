import type { NuxtModule } from '@nuxt/schema';

import { defu } from 'defu';
import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit';

import { type AnalyticsOptions } from '@unplugin-analytics/core';

const nuxtModule = defineNuxtModule<AnalyticsOptions>({
  meta: {
    // Usually the npm package name of your module
    name: 'unplugin-analytics/nuxt',
    // The key in `nuxt.config` that holds your module options
    configKey: 'analytics',
    // Compatibility constraints
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0'
    }
  },
  // Default configuration options for your module, can also be a function returning those
  defaults: {},
  // Shorthand sugar to register Nuxt hooks
  hooks: {},
  setup(options: AnalyticsOptions = {}, nuxt) {
    // Add module options to public runtime config
    nuxt.options.runtimeConfig.public.analytics = defu(
      nuxt.options.runtimeConfig.public.analytics as AnalyticsOptions,
      options
    );

    const { resolve } = createResolver(import.meta.url);
    const src = resolve('runtime/plugins/analytics');
    nuxt.options.build.transpile.push(src);
    addPlugin({
      src,
      mode: 'server'
    });
  }
}) as NuxtModule<AnalyticsOptions>;

export default nuxtModule;

declare module '@nuxt/schema' {
  interface NuxtConfig {
    analytics?: AnalyticsOptions;
  }

  interface NuxtOptions {
    analytics?: AnalyticsOptions;
  }
}
