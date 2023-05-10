import { definePlugin } from "@halo-dev/console-shared";
import HomeView from "./views/grapesJsComponent.vue";
import { IconPlug } from "@halo-dev/components";
import { markRaw } from "vue";
import GrapesJS from "grapesjs";
import GrapesEdit from "./views/test.vue";

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
