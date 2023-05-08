import type grapesjs from 'grapesjs';
import juice from 'juice';
import { PluginOptions } from '.';

let innerHtml;
export default (editor: grapesjs.Editor, opts: Required<PluginOptions>) => {
  const tmpl = `${editor.getHtml()}<style>${editor.getCss()}</style>`;
  console.log(juice(tmpl, opts.juiceOpts));
  innerHtml = juice(tmpl, opts.juiceOpts);
}
export {innerHtml}
