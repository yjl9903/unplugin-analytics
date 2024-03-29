# vite-plugin-analytics

[![version](https://img.shields.io/npm/v/vite-plugin-analytics?label=vite-plugin-analytics)](https://www.npmjs.com/package/vite-plugin-analytics)
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
npm i -D vite-plugin-analytics
```

## Usage

```ts
// vite.config.ts

import Analytics from 'vite-plugin-analytics';

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

- `src`: Your plausible script url or the host
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
