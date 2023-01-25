import { processExpression } from "@vue/compiler-core";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  static: true,
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
});
