import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
  }),
  vite: {
    resolve: {
      alias: {
        "@styles": "/src/styles",
      },
    },
  },
});
