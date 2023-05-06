import { definePlugin } from "@halo-dev/console-shared";
import HomeView from "./views/HomeView.vue";
import { IconPlug } from "@halo-dev/components";
import { markRaw } from "vue";
import GrapesJS from "grapesjs";
import GrapesEdit from "./views/HomeView.vue";

export default definePlugin({
  components: {},
  routes: [
    {
      parentName: "Root",
      route: {
        path: "/example",
        children: [
          {
            path: "",
            name: "Example",
            component: HomeView,
            meta: {
              title: "示例页面",
              searchable: true,
              menu: {
                name: "示例页面",
                group: "示例分组",
                icon: markRaw(IconPlug),
                priority: 0,
              },
            },
          },
        ],
      },
    },
  ],
  extensionPoints: {
    "editor:create": () => {
      return [
        {
          name: "grapesedit",
          displayName: "GrapesEdit",
          component: markRaw(GrapesEdit),
          rawType: "markdown",
        },
      ];
    },
  },
});
