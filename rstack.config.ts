// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';

define.lib({
  lib: [
    { syntax: 'es2021', dts: true },
    {
      format: 'cjs',
      syntax: 'es2021',
      output: {
        externals: {
          'html-minifier-terser': 'import html-minifier-terser',
        },
      },
    },
  ],
  output: {
    target: 'node',
  },
});

define.test({
  // Preserve the standalone Rstest configuration without Rslib inheritance.
  extends: {},
  env: {
    // Let Rsbuild choose the mode based on the command.
    NODE_ENV: undefined,
  },
  isolate: false,
});

define.fmt({
  singleQuote: true,
});

define.staged({
  '*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}': ['rs lint --fix', 'rs fmt'],
  '*.{json,json5,jsonc,md,mdx,css,scss,less,html,yml,yaml}': 'rs fmt',
});

define.lint(({ js, ts }) => [js.configs.recommended, ts.configs.recommended]);
