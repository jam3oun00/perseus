module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: "plugin:nuxt/recommended",
  plugins: ["nuxt"],
  // add your custom rules here
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "max-len": ["error", { code: 600 }],
    strict: 0,
  },
};
