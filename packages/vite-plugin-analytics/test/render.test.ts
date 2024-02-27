import { describe, it, expect } from 'vitest';

import { generate } from '@unplugin-analytics/core';

import { renderScriptTag } from '../src/render';

describe('Generate script tags', () => {
  it('should generate umami', () => {
    expect(
      generate({
        umami: {
          id: `a8602a4a-8d41-4df7-9797-5bd074785f2c`
        }
      }).map(renderScriptTag)
    ).toMatchInlineSnapshot(`
      [
        {
          "attrs": {
            "data-website-id": "a8602a4a-8d41-4df7-9797-5bd074785f2c",
            "defer": true,
            "src": "https://us.umami.is/script.js",
          },
          "injectTo": "head",
          "tag": "script",
        },
      ]
    `);

    expect(
      generate({
        umami: {
          src: `https://umami.onekuma.cn/script.js`,
          id: `a8602a4a-8d41-4df7-9797-5bd074785f2c`
        }
      }).map(renderScriptTag)
    ).toMatchInlineSnapshot(`
      [
        {
          "attrs": {
            "data-website-id": "a8602a4a-8d41-4df7-9797-5bd074785f2c",
            "defer": true,
            "src": "https://umami.onekuma.cn/script.js",
          },
          "injectTo": "head",
          "tag": "script",
        },
      ]
    `);

    expect(
      generate({
        umami: {
          src: `umami.onekuma.cn`,
          id: `a8602a4a-8d41-4df7-9797-5bd074785f2c`
        }
      }).map(renderScriptTag)
    ).toMatchInlineSnapshot(`
      [
        {
          "attrs": {
            "data-website-id": "a8602a4a-8d41-4df7-9797-5bd074785f2c",
            "defer": true,
            "src": "https://umami.onekuma.cn/script.js",
          },
          "injectTo": "head",
          "tag": "script",
        },
      ]
    `);
  });

  it('should generate plausible', () => {
    expect(
      generate({
        plausible: {
          domain: `garden.onekuma.cn`
        }
      }).map(renderScriptTag)
    ).toMatchInlineSnapshot(`
      [
        {
          "attrs": {
            "data-domain": "garden.onekuma.cn",
            "defer": true,
            "src": "https://plausible.io/js/script.js",
          },
          "injectTo": "head",
          "tag": "script",
        },
      ]
    `);

    expect(
      generate({
        plausible: {
          src: `https://plausible.io/js/script.js`,
          domain: `garden.onekuma.cn`
        }
      }).map(renderScriptTag)
    ).toMatchInlineSnapshot(`
      [
        {
          "attrs": {
            "data-domain": "garden.onekuma.cn",
            "defer": true,
            "src": "https://plausible.io/js/script.js",
          },
          "injectTo": "head",
          "tag": "script",
        },
      ]
    `);
  });

  it('should generate cloudflare', () => {
    expect(
      generate({
        cloudflare: {
          beacon: `aa68fa3bf166467082bc79ba029b057f`
        }
      }).map(renderScriptTag)
    ).toMatchInlineSnapshot(`
      [
        {
          "attrs": {
            "data-cf-beacon": "{"token": "aa68fa3bf166467082bc79ba029b057f"}",
            "defer": true,
            "src": "https://static.cloudflareinsights.com/beacon.min.js",
          },
          "injectTo": "head",
          "tag": "script",
        },
      ]
    `);
  });

  it('should generate clarity', () => {
    expect(
      generate({
        clarity: {
          id: `kwj19d7z4j`
        }
      })
    ).toMatchInlineSnapshot(`
      [
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
