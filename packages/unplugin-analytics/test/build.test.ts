import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { describe, it, expect } from 'vitest';

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
