import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { describe, it, expect } from 'vitest';

describe('~analytics/scripts', () => {
  it('should work', async () => {
    const tags = (await import('~analytics/scripts')).default;
    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "dataset": {
            "websiteId": "19800483-25c2-4fde-8330-3e717591eabb",
          },
          "defer": true,
          "src": "https://umami.onekuma.cn/script.js",
        },
        {
          "dataset": {
            "domain": "garden.onekuma.cn",
          },
          "defer": true,
          "src": "https://plausible.io/js/script.js",
        },
        {
          "dataset": {
            "cfBeacon": "{"token": "aa68fa3bf166467082bc79ba029b057f"}",
          },
          "defer": true,
          "src": "https://static.cloudflareinsights.com/beacon.min.js",
        },
        {
          "children": "(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "kwj19d7z4j");",
          "type": "text/javascript",
        },
      ]
    `);
  });
});

describe(
  'Examples',
  () => {
    it('should build nuxt', async () => {
      const root = path.join(fileURLToPath(import.meta.url), '../../../../examples/nuxt/');
      execSync(`pnpm run generate`, { cwd: root });
      const indexHtml = await fs.promises.readFile(path.join(root, 'dist', 'index.html'), 'utf-8');

      const expected = [
        `<script defer data-website-id="19800483-25c2-4fde-8330-3e717591eabb" src="https://umami.onekuma.cn/script.js"></script>`,
        `<script defer data-domain="garden.onekuma.cn" src="https://plausible.io/js/script.js"></script>`,
        `<script defer data-cf-beacon="{&quot;token&quot;: &quot;aa68fa3bf166467082bc79ba029b057f&quot;}" src="https://static.cloudflareinsights.com/beacon.min.js"></script>`,
        `(window, document, "clarity", "script", "kwj19d7z4j")`
      ];
      for (const text of expected) {
        expect(indexHtml.indexOf(text) !== -1).toBeTruthy();
      }
    });

    it('should build astro', async () => {
      const root = path.join(fileURLToPath(import.meta.url), '../../../../examples/astro/');
      execSync(`pnpm run build`, { cwd: root });
      const indexHtml = await fs.promises.readFile(path.join(root, 'dist', 'index.html'), 'utf-8');

      const expected = [
        `<script src="https://umami.onekuma.cn/script.js" defer data-website-id="19800483-25c2-4fde-8330-3e717591eabb"></script>`,
        `<script src="https://plausible.io/js/script.js" defer data-domain="garden.onekuma.cn"></script>`,
        `<script src="https://static.cloudflareinsights.com/beacon.min.js" defer data-cf-beacon="{&quot;token&quot;: &quot;aa68fa3bf166467082bc79ba029b057f&quot;}"></script>`,
        `(window, document, "clarity", "script", "kwj19d7z4j")`
      ];
      for (const text of expected) {
        expect(indexHtml.indexOf(text) !== -1).toBeTruthy();
      }
    });
  },
  20 * 1000
);
