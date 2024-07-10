import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://vinitshahdeo.com",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
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
