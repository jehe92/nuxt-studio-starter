// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-12-10",
  devtools: { enabled: true },

  modules: ["@nuxt/content", "@nuxthq/studio", "nuxt-icons"],

  routeRules: {
    "/": { prerender: true },
  },

  // Auto import components
  components: {
    dirs: [
      {
        path: "~/components/layout",
        extensions: ["vue"],
        pathPrefix: true,
        prefix: "app",
      },
      {
        path: "~/components/ui",
        extensions: ["vue"],
        pathPrefix: false,
        prefix: "app",
      },
    ],
  },

  // CSS config
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // nuxt content config
  content: {
    markdown: {
      anchorLinks: false,
    },
  },

  hooks: {
    "components:extend": (components) => {
      const global = components.filter((c) => ["AppButton"].includes(c.pascalName));
      global.forEach((c) => (c.global = true));
    },
  },
});
