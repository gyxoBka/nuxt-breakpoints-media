export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  breakpoints: {
    fallback: {
      lSm: true,
      sSm: false,
      lMd: true,
      sMd: false,
      lLg: true,
    },
  },
})
