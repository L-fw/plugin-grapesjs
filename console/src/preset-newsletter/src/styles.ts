import type grapesjs from 'grapesjs';
import { PluginOptions } from '.';

export default function(editor: grapesjs.Editor, opts: Required<PluginOptions>) {
    let sectors = editor.StyleManager.getSectors();

    if (opts.updateStyleManager) {
        const styleManagerSectors = [{
            name: '平面属性',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
            properties:[
              { name: '宽', property: 'width'},
              { name: '高', property: 'height'},
              { name: '最大宽度', property: 'max-width'},
              { name: '最小高度', property: 'min-height'},
              {
              property: 'margin',
              name: '外边距',
              properties:[
                { name: 'Top', property: 'margin-top'},
                { name: 'Left', property: 'margin-left'},
                { name: 'Right', property: 'margin-right'},
                { name: 'Bottom', property: 'margin-bottom'}
              ],
            },{
              property  : 'padding',
              name: '内边距',
              properties:[
                { name: 'Top', property: 'padding-top'},
                { name: 'Right', property: 'padding-right'},
                { name: 'Bottom', property: 'padding-bottom'},
                { name: 'Left', property: 'padding-left'}
              ],
            }],
          },{
            name: '文字样式',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-decoration', 'font-style', 'vertical-align', 'text-shadow'],
            properties:[
              { property: 'font-family', name: '字体'},
              { name: '粗细', property: 'font-weight'},
              { name: '颜色', property: 'color'},
              { name: '大小', property: 'font-size'},
              { name: '字间距', property: 'letter-spacing'},
              { name: '行间距', property: 'line-height'},
              {
                property: 'text-align',
                name: '水平对齐',
                type: 'radio',
                defaults: 'left',
                list: [
                  { value: 'left', name: 'Left', className: 'fa fa-align-left'},
                  { value: 'center', name: 'Center', className: 'fa fa-align-center' },
                  { value: 'right', name: 'Right', className: 'fa fa-align-right'},
                  { value: 'justify', name: 'Justify', className: 'fa fa-align-justify'}
                ],
              },{
                property: 'text-decoration',
                name: '文本装饰',
                type: 'radio',
                defaults: 'none',
                list: [
                  { value: 'none', name: 'None', className: 'fa fa-times'},
                  { value: 'underline', name: 'underline', className: 'fa fa-underline' },
                  { value: 'line-through', name: 'Line-through', className: 'fa fa-strikethrough'}
                ],
              },{
                property: 'font-style',
                name: '字体',
                type: 'radio',
                defaults: 'normal',
                list: [
                  { value: 'normal', name: 'Normal', className: 'fa fa-font'},
                  { value: 'italic', name: 'Italic', className: 'fa fa-italic'}
                ],
              },{
                property: 'vertical-align',
                name: '垂直对齐',
                type: 'select',
                defaults: 'baseline',
                list: [
                  { value: 'baseline',name:'线对齐'},
                  { value: 'top',name:'顶部对齐'},
                  { value: 'middle',name:'中部对齐'},
                  { value: 'bottom',name:'底部对齐'}
                ],
              },{
                property: 'text-shadow',
                name: '文本阴影',
                properties: [
                  { name: 'X方向', property: 'text-shadow-h'},
                  { name: 'Y方向', property: 'text-shadow-v'},
                  { name: '模糊', property: 'text-shadow-blur'},
                  { name: '颜色', property: 'text-shadow-color'}
                ],
            }],
          },{
            name: '整体样式',
            open: false,
            buildProps: ['background-color', 'border-collapse', 'border-radius', 'border', 'background'],
            properties: [{
              property: 'background-color',
              name: '背景颜色',
            },{
              property: 'border-radius',
              name: '边框圆角',
              properties  : [
                { name: 'Top', property: 'border-top-left-radius'},
                { name: 'Right', property: 'border-top-right-radius'},
                { name: 'Bottom', property: 'border-bottom-left-radius'},
                { name: 'Left', property: 'border-bottom-right-radius'}
              ],
            },{
              property: 'border-collapse',
              name: '边框合并',
              type: 'radio',
              defaults: 'separate',
              list: [
                { value: 'separate', name: '否'},
                { value: 'collapse', name: '是'}
              ],
            },
            {
              property: 'border',
              name: '边框线',
              properties: [
                { name: 'Width', property: 'border-width', defaults: '0'},
                { name: 'Style', property: 'border-style'},
                { name: 'Color', property: 'border-color'},
              ],
            },{
              property: 'background', 
              name: '背景图片',
              properties: [
                { name: 'Image', property: 'background-image'},
                { name: 'Repeat', property:   'background-repeat'},
                { name: 'Position', property: 'background-position'},
                { name: 'Attachment', property: 'background-attachment'},
                { name: 'Size', property: 'background-size'}
              ],
            }],
        }];

        editor.onReady(() => {
            sectors.reset();
            sectors.add(styleManagerSectors);
        });
    }
}
