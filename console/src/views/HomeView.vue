<template>
  <div>
    <div id="gjs" style="height: 0px; overflow: hidden;">
      Hello World
    </div>
  </div>
</template>

<style>
body,
html {
  height: 100%;
  margin: 0;
}
</style>

<script>
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import webpage from 'grapesjs-preset-webpage';
import newsletter from 'grapesjs-preset-newsletter'
import plugin from '../preset-newsletter/src/plugin'

export default {
  name: 'GrapesComponent',
    mounted() {
      let editor = grapesjs.init({
        showOffsets: 1,
        noticeOnUnload: 0,
        container: '#gjs',
        height: '100%',
        fromElement: true,
        storageManager: {autoload: 0},
        plugins: [plugin],
        pluginsOpts: {
          [plugin]: {}
        }
      });

      editor.BlockManager.add('testBlock', {
        label: 'Block',
        attributes: {class: 'gjs-fonts gjs-f-b1', title: 'hello'},
        content: '<div style="text-align:center"><span>Hello World</span></div>',
      });
    },
};
</script>
