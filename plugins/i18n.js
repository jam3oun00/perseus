export default function ({ app }) {
  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    app.vuetify.framework.lang.current = newLocale
  }
}
