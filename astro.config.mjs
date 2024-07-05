import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkModifiedTime } from "./remark-modified-time.mjs";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "hybrid",
  adapter: netlify({
    imageCDN: false,
  }),
  vite: {
    resolve: {
      alias: {
        "@styles": "/src/styles",
      },
    },
  },
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
  // cacheOnDemandPages: true, // @todo: Enable this for final build
});
