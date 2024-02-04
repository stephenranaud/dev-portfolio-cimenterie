import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import bookshop from "@bookshop/astro-bookshop";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [bookshop(), react()],
});
