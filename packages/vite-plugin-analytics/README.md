# vite-plugin-analytics

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

import Analytics from 'vite-plugin-analytics'

export default defineConfig({
  plugins: [
    Analytics({
      analytics: {
        // ...
      }
    })
  ]
})
```

## License

MIT License © 2024 [XLor](https://github.com/yjl9903)
