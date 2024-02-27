# unplugin-analytics

[![version](https://img.shields.io/npm/v/unplugin-analytics?label=unplugin-analytics)](https://www.npmjs.com/package/unplugin-analytics)
[![GitHub License](https://img.shields.io/github/license/yjl9903/unplugin-analytics)](https://github.com/yjl9903/unplugin-analytics/blob/main/LICENSE)
[![CI](https://github.com/yjl9903/unplugin-analytics/actions/workflows/ci.yml/badge.svg)](https://github.com/yjl9903/unplugin-analytics/actions/workflows/ci.yml)

> Still work in progress.

Universal Analytics Engines Integration.

Support analytics engines:

- Umami
- Plausible
- Cloudflare Web Analytics
- Microsoft Clarity

## Installation

```bash
npm i -D unplugin-analytics
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts

import Analytics from 'unplugin-analytics/vite';

export default defineConfig({
  plugins: [
    Analytics({
      analytics: {
        cloudflare: {
          beacon: '...'
        },
        // Your unplugin-analytics options ...
      }
    })
  ]
});
```

Full example is located at [examples/vite](https://github.com/yjl9903/unplugin-analytics/blob/main/examples/vite).

<br></details>

<details>
<summary>Astro</summary><br>

```ts
// astro.config.mjs

import Analytics from 'unplugin-analytics/astro';

export default defineConfig({
  integrations: [
    Analytics({
      analytics: {
        cloudflare: {
          beacon: '...'
        },
        // Your unplugin-analytics options ...
      }
    })
  ],
});
```

Then add the astro component made of injected scripts to your layouts.

```astro
---
import Analytics from '~analytics/component.astro'

// ...
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="Astro description" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    <!-- Inject the scripts begin -->
    <Analytics />
    <!-- Inject the scripts end -->

    <meta name="generator" content={Astro.generator} />
    <!-- ... -->
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

Full example is located at [examples/astro](https://github.com/yjl9903/unplugin-analytics/blob/main/examples/astro).

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.ts

export default defineNuxtConfig({
  modules: ['unplugin-analytics/nuxt'],
  analytics: {
    cloudflare: {
      beacon: '...'
    },
    // Your unplugin-analytics options ...
  }
});
```

Full example is located at [examples/nuxt](https://github.com/yjl9903/unplugin-analytics/blob/main/examples/nuxt).

<br></details>

## Usage

Taking Vite as an example, you can config the analytics engines.

```ts
// vite.config.ts

import Analytics from 'unplugin-analytics/vite';

export default defineConfig({
  plugins: [
    Analytics({
      analytics: {
        umami: {
          src: `...`,
          id: `...`
        },
        plausible: {
          domain: `...`
        },
        cloudflare: {
          beacon: `...`
        },
        clarity: {
          id: `...`
        }
      }
    })
  ]
});
```

### Umami

**Provider key**: `umami`

**Parameters**:

- `src`: Your umami script url or the host
- `id`: Your umami website id

Generated script:

```html
<script defer data-website-id="..." src="https://umami.is/script.js"></script>
```

### Plausible

**Provider key**: `plausible`

**Parameters**:

- `src`: Your plausible script
- `id`: Your website domain

Generated script:

```html
<script defer data-domain="..." src="https://plausible.io/js/script.js"></script>
```

### Cloudflare Web Analytics

**Provider key**: `cloudflare`

**Parameters**:

- `beacon`: Your cloudflare web analytics beacon

Generated script:

```html
<script defer data-cf-beacon="{&quot;token&quot;: &quot;...&quot;}" src="https://static.cloudflareinsights.com/beacon.min.js"></script>
```

### Microsoft Clarity

**Provider key**: `clarity`

**Parameters**:

- `id`: Your clarity project id

Generated script:

```html
<script>(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "...");</script>
```

## License

MIT License © 2024 [XLor](https://github.com/yjl9903)
