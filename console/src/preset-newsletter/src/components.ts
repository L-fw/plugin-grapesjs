import type grapesjs from 'grapesjs';
// @ts-ignore
import { PluginOptions } from '.';

export default (editor: grapesjs.Editor) => {

  editor.Components.addType('inputbox', {
    model: {
      defaults: {
        content:
          `<input type="text" />`,
      }
    }
  });

  editor.Components.addType('textarea', {
    model: {
      defaults: {
        content:
          `<textarea></textarea>`,
      }
    }
  });

  editor.Components.addType('select', {
    model: {
      defaults: {
        content:
          `<select type="text"><option value="opt1">选项 1</option><option value="opt2">选项 2</option></select>`,
      }
    }
  });

  editor.Components.addType('button', {
    model: {
      defaults: {
        content:
          `<button class="button">按钮</button>`,
      }
    }
  });

  editor.Components.addType('label', {
    model: {
      defaults: {
        content:
          `<label>标签</label>`,
      }
    }
  });

  //单选框
  editor.Components.addType('checkbox', {
    model: {
      defaults: {
        content:
          `<input type="checkbox" />`,
      }
    }
  });

  //多选框
  editor.Components.addType('radio', {
    model: {
      defaults: {
        content:
          `<input type="radio" />`,
      }
    }
  });
  
  // 标签页
  const tabScript = function (){
    console.log("123");
    editor.setComponents("<h1>code</h1>");
  };

  editor.Components.addType('tabs', {
    model: {
      defaults: {
        tabScript,
        style: {
          width: '100px',
          height: '100px',
          background: 'red',
        }
      }
    }
  });
  
}
