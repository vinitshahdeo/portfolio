import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    partytown({ config: { forward: ["dataLayer.push"] } }),
  ],
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
  cacheOnDemandPages: true,
});
