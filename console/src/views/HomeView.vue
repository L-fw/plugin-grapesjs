<template>
  <div>
<!--    <button @click="test">test</button>-->
    <div id="gjs" style="height: 0px; overflow: hidden;">
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
// import webpage from 'grapesjs-preset-webpage';
// import newsletter from 'grapesjs-preset-newsletter'
import plugin from '../preset-newsletter/src/plugin'
import zh from 'grapesjs/locale/zh'
import {defineProps, watch} from "vue";
// import {innerHtml} from '../preset-newsletter/src/openExportCommand'






let editor;
export default {
  name: 'GrapesComponent',
  // opts: Required<PluginOptions>,
    mounted() {
       editor = grapesjs.init({
        showOffsets: 1,
        noticeOnUnload: 0,
        container: '#gjs',
        height: '100%',
        fromElement: true,
        storageManager: {autoload: 0},
        plugins: [plugin],
        pluginsOpts: {
          [plugin]: {}
        },
        i18n: {
          messages: {zh}
        }
      });

      editor.BlockManager.add('testBlock', {
        label: 'Block',
        attributes: {class: 'gjs-fonts gjs-f-b1', title: 'hello'},
        content: '<div style="text-align:center"><span>Hello World</span></div>',
      });
    },
    methods:{
      test() {
        const data = editor.getHtml();
        console.log(data);
        const data2 = editor.getCss();
        console.log(data2);
        // console.log(innerHtml);
      }
    }
};
</script>
