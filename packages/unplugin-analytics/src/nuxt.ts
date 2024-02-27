import type { NuxtModule } from '@nuxt/schema';

import { defineNuxtModule } from '@nuxt/kit';

import { UnpluginAnalytics, type Options } from './plugin';

const nuxtModule = defineNuxtModule<Options>({
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
  setup(options: Options = {}, nuxt) {
    // // install webpack plugin
    // nuxt.hook('webpack:config', async (config: any) => {
    //   config.plugins = config.plugins || [];
    //   config.plugins.unshift(UnpluginAnalytics.webpack(options));
    // });
    // // install vite plugin
    // nuxt.hook('vite:extendConfig', async (config: any) => {
    //   config.plugins = config.plugins || [];
    //   config.plugins.push(UnpluginAnalytics.vite(options));
    // });
  }
}) as NuxtModule<Options>;

export default nuxtModule;

declare module '@nuxt/schema' {
  interface NuxtConfig {
    analytics?: Options;
  }

  interface NuxtOptions {
    analytics?: Options;
  }
}
