// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://radoslawrzepka.me",
  integrations: [sitemap(), react(), icon()],
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});