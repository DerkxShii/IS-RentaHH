import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://vbartalis.github.io",
  base: "/agency-template",
  resolve: {
    alias: {
      "@src": "./src", // Alias para el directorio src
    },
  },
});
