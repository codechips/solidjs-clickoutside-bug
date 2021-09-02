# solidjs-clickoutside-bug

Possible bundler bug example of the click outside directive.

Getting `Uncaught TypeError: accessor is not a function` when clicking outside the element when importing the directive function from the external component.

It works fine if I put the directive function in the component file where it is used.

## Problem solved!

See here: https://github.com/solidjs/solid/issues/569

**TL;DR**

If it's not a component don't use `.jsx` or `.tsx`, but `.js` or `*.ts`.

Also, if using directives make sure to add `onlyRemoveTypeImports` option to Solid plugin config. See below.

## Install Log

```text
$ pnpx degit solidjs/templates/ts-windicss solidjs-clickoutside-bug
$ cd solidjs-clickoutside-bug && pnpm i
$ pnpm dev
```
## Modifications

```js
// vite.config.ts

import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  plugins: [
    // added recommended options so that directive fn is not removed by esbuild at compile time
    solidPlugin({ typescript: { onlyRemoveTypeImports: true }}),
    WindiCSS({
      scan: {
        fileExtensions: ["html", "js", "ts", "jsx", "tsx"],
      },
    }),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});

```

