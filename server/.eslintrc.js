module.exports = {
  extends: ["airbnb-base", "plugin:jest/recommended"],
  plugins: ["import", "jest"],
  rules: {
    "import/no-dynamic-require": 0,
    "no-param-reassign": 0,
    "no-useless-catch": 0,
    quotes: "off",
  },
  env: {
    node: true,
    "jest/globals": true,
  },
};
