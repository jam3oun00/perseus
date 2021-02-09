import colors from "vuetify/es5/util/colors";
import minifyTheme from "minify-css-string";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  server: {
    port: 4444, // default: 4444
    host: "localhost", // default: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Perseus",
    title: "Perseus",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [{ rel: "preconnect", href: "https://fonts.gstatic.com" }],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,700;1,700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/scss/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/VueTablerIcons.js", ssr: false },
    { src: "~plugins/overlayscrollbars.js" },
    { src: "~plugins/aos", ssr: false },
    { src: "~plugins/i18n.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  components: ["~components/utils/"],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/eslint-module",
    "@nuxtjs/style-resources",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://i18n.nuxtjs.org/
    "nuxt-i18n",
  ],

  // https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: [
      "~/assets/scss/*.scss",
      "~/assets/scss/common/*.scss",
      "~/assets/scss/utils/*.scss",
    ],
    // sass: ["~vuetify/src/styles/styles.sass"]
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  //
  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.js",
      },
      {
        code: "es",
        name: "Español",
        file: "es.js",
      },
      {
        code: "fr",
        name: "Français",
        file: "fr.js",
      },
      {
        code: "ar",
        name: "Arabic",
        file: "ar.js",
      },
    ],
    lazy: true,
    langDir: "languages/",
    defaultLocale: "fr",
    vueI18n: {
      fallbackLocale: "fr",
      silentTranslationWarn: true,
    },
    loadLanguagesAsync: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "redirected",
      alwaysRedirect: true,
      fallbackLocale: "en",
    },
    vueI18nLoader: true,
  },

  //
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    treeShake: true,
    theme: {
      dark: false,
      options: {
        customProperties: true,
        minifyTheme,
        themeCache: {
          get: (key) => (process.browser ? localStorage.getItem(key) : null),
          set: (key, value) =>
            process.browser ? localStorage.setItem(key, value) : null,
        },
      },
      themes: {
        dark: {
          primary: "#4e3cd9",
          wall: "#d6d7e9",
          secondary: "#222e54",
          accent: "#22233f",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: "#4e3cd9",
          wall: "#1c1f2e",
          secondary: "#222e54",
          accent: "#22233f",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
