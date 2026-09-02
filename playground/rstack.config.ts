// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginHtmlMinifierTerser } from '../src/index.ts';

define.app({
  plugins: [pluginHtmlMinifierTerser()],
});
