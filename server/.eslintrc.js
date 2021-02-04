module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  plugins: [
    'import',
    'jest',
  ],
  rules: {
    "import/no-dynamic-require": 0,
    "no-param-reassign": 0
  },
  env: {
    node: true,
    'jest/globals': true,
  },
};
