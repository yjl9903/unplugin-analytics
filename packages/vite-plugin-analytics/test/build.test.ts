import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { build } from 'vite';
import { describe, it, expect } from 'vitest';

describe('vite', () => {
  it('should build', async () => {
    const root = path.join(fileURLToPath(import.meta.url), '../../../../examples/vite/');
    const output = await build({
      root,
      logLevel: 'silent'
    });

    // @ts-ignore
    const indexHtml = output.output.filter((file) => file.fileName === 'index.html')[0];
    const expected = [
      `<script defer data-website-id="19800483-25c2-4fde-8330-3e717591eabb" src="https://umami.onekuma.cn/script.js"></script>`,
      `<script defer data-domain="garden.onekuma.cn" src="https://plausible.io/js/script.js"></script>`,
      `<script defer data-cf-beacon="{&quot;token&quot;: &quot;aa68fa3bf166467082bc79ba029b057f&quot;}" src="https://static.cloudflareinsights.com/beacon.min.js"></script>`,
      `(window, document, "clarity", "script", "kwj19d7z4j")`
    ];
    for (const text of expected) {
      expect(indexHtml.source.indexOf(text) !== -1).toBeTruthy();
    }
  });
});
