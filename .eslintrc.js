const path = require("path");

module.exports = {
  extends: ["airbnb", "plugin:jest/recommended"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: ["babel", "react-hooks"],
  parser: "babel-eslint",
  rules: {
    "new-cap": "off",
    camelcase: "off",
    "no-invalid-this": "off",
    "object-curly-spacing": "off",
    quotes: "off",
    semi: "off",
    "no-unused-expressions": "off",
    "valid-typeof": "off",
    "babel/new-cap": "error",
    "babel/camelcase": "error",
    "babel/no-invalid-this": "error",
    "babel/object-curly-spacing": ["error", "always"],
    "babel/quotes": ["error", "single", { avoidEscape: true }],
    "babel/semi": "error",
    "babel/no-unused-expressions": "error",
    "babel/valid-typeof": "error",
    "import/no-extraneous-dependencies": "off",
    "react/require-default-props": "off",
    "react-hooks/rules-of-hooks": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      "eslint-import-resolver-lerna": {
        packages: path.resolve(__dirname, "packages"),
      },
    },
  },
};
