import { definePlugin } from "@halo-dev/console-shared";
import { markRaw } from "vue";
import GrapesEdit from "./views/grapesjs.vue";

export default definePlugin({
  extensionPoints: {
    "editor:create": () => {
      return [
        {
          name: "grapesedit",
          displayName: "GrapesEdit",
          component: markRaw(GrapesEdit),
          rawType: "html",
        },
      ];
    },
  },
});
