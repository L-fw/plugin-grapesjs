import type grapesjs from 'grapesjs';
// @ts-ignore
import { PluginOptions } from '.';

export default (editor: grapesjs.Editor) => {
  editor.DomComponents.addType('input', {
    isComponent: el => el.tagName == 'INPUT',
    model: {
      defaults: {
        traits(component: any) {
          const result = [];
          // Example of some logic
          console.log(component.get('attributes'));
          if (component.get('type') == 'input') {
            result.push(
              {
                type: 'text',
                name: 'id',
                label: 'ID',
              },
              {
                type: 'text',
                name: 'name',
                label: '名称',
              },
              {
                type: 'text',
                name: 'placeholder',
                label: '提示',
                default: '请输入..',
              },
              {
                type: 'select', // Type of the trait
                label: '类型', // The label you will see in Settings
                name: 'type', // The name of the attribute/property to use on component
                options: [
                  { id: 'text', name: '普通文本'},
                  { id: 'email', name: '邮箱'},
                  { id: 'password', name: '密码'},
                  { id: 'number', name: '数字'},
                ]
              },
              {
                type: 'checkbox',
                name: 'required',
                label: '必填',
              });
          }
          else if (component.get('type') == 'checkbox') {
            result.push(
              {
                type: 'text',
                name: 'id',
                label: 'ID',
              },
              {
                type: 'text',
                name: 'name',
                label: '名称',
              },
              {
                type: 'text',
                name: 'placeholder',
                label: '提示',
              },
              {
                type: 'checkbox',
                name: 'required',
                label: '独立',
                placeholder: '注意：请将相关联的checkBox放在同一父组件下（还未实现，后续实现）',
              });
          }
          else {
            result.push({
              type: 'select',
            });
          }
          return result;
        },
        
        // As by default, traits are binded to attributes, so to define
        // their initial value we can use attributes
        attributes: { type: 'text', required: true },
      },
    },
  });
  editor.DomComponents.addType('textarea', {
    isComponent: el => el.tagName == 'TEXTAREA',
    model: {
      defaults: {
        traits: [
          {
            type: 'text',
            name: 'id',
            label: 'ID',
          },
          {
            type: 'text',
            name: 'name',
            label: '名称',
          },
          {
            type: 'text',
            name: 'placeholder',
            label: '提示',
            default: '请输入..',
          },
          {
            type: 'checkbox',
            name: 'required',
            label: '必填',
          }],
        attributes: { type: 'text', required: true },
      },
    },
  });
  editor.DomComponents.addType('select', {
    isComponent: el => el.tagName == 'SELECT',
    model: {
      defaults: {
        // component
        traits() {
          const result = [];
              result.push(
                {
                  type: 'text',
                  name: 'id',
                  label: 'ID',
                },
                {
                  type: 'text',
                  name: 'name',
                  label: '名称',
                },
                {
                  type: 'number',
                  name: 'option',
                  label: '选项个数',
                  default: 2,
                },)
          return result;
        },
        attributes: { type: 'text', required: true },
      },
    },
  });
  editor.DomComponents.addType('button', {
    isComponent: el => el.tagName == 'BUTTON',
    model: {
      defaults: {
        traits: [
          {
            type: 'text',
            name: 'id',
            label: 'ID',
          },
          {
            type: 'text',
            name: 'name',
            label: '名称',
          },
          {
            type: 'select', // Type of the trait
            label: '类型', // The label you will see in Settings
            name: 'type', // The name of the attribute/property to use on component
            options: [
              { id: 'button', name: '按钮'},
              { id: 'reset', name: '重置'},
              { id: 'submit', name: '提交'},
            ]
          }],
        attributes: { type: 'text', required: true },
      },
    },
  });
  editor.DomComponents.addType('checkbox', {
    isComponent: el => el.tagName == 'CHECKBOX',
    model: {
      defaults: {
        traits: [
          {
            type: 'text',
            name: 'name',
            label: '名称',
          },
          {
            type: 'checkbox',
            name: 'required',
            label: '独立',
            placeholder: '注意：请将相关联的checkBox放在同一父组件下（还未实现，后续实现）',
          }],
        attributes: { type: 'text', required: true },
      },
    },
  });
  editor.DomComponents.addType('path', {
    isComponent: el => el.tagName == 'PATH',
    model: {
      defaults: {
        traits: [
          {
            type: 'text',
            name: 'id',
            label: 'ID',
            placeholder: '输入文字',
          },
          {
            type: 'text',
            name: 'title',
            label: '名称',
            placeholder: '输入文字',
          },
          {
            type: 'text',
            name: 'd',
            label: 'path路径',
            placeholder: 'svg path',
          }],
        attributes: { type: 'text', required: true },
      },
    },
  });
}
