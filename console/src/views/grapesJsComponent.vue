<template>
    <div id="gjs" style="height: 0px; overflow: hidden;">
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
import plugin from '../preset-newsletter/src/plugin'
import zh from 'grapesjs/locale/zh'
import {defineProps, ref, watch} from "vue";
import {innerHtml} from '@/preset-newsletter/src/exportHtml'

let editor;
export default {
  name: 'GrapesComponent',
  props: {
    value: String,
  },
  emits: ["change"],
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
    editor.setComponents(this.value);
    editor.on("update", () => {
      this.$emit("change", innerHtml);
    });
  },
};
</script>
