// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://radoslawrzepka.me",
  integrations: [sitemap(), react()],
  output: "static",
  adapter: vercel({ webAnalytics: { enabled: true } }),
  vite: {
    plugins: [tailwindcss()],
  },
});
