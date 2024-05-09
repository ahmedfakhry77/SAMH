// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/direction-control',  // your plugins file name
    // other plugins
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            code: "en",
            file: "en.json",
            dir: "ltr",
            name: "English",
          },
          {
            code: "ar",
            file: "ar.json",
            dir: "rtl", // that will be passed to your app
            name: "عربي",
          },
        ],
        langDir: "translations/",
        locale: "ar",
        defaultLocale: "ar",
      },
    ],
  ],
});
