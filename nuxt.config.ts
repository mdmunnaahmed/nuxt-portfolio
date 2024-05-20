import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "/css/app.css" },
      ],
    }
  },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  pinia: { autoImports: ["defineStore", ["defineStore", "definePiniaStore"]] },
});
