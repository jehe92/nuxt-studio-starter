// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio'],

  routeRules: {
    '/': { prerender: true }
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

  compatibilityDate: '2024-12-10'
})