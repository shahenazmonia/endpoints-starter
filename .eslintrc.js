module.exports = {

  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended", "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "indent": [
      "error", 2
    ],
    "linebreak-style": [
      "error", "unix"
    ],
    "quotes": [
      "error", "single"
    ],
    "semi": [
      "error", "always"
    ],
    "arrow-parens": [
      2,
      "as-needed", {
        "requireForBlockBody": true
      }
    ],
    "object-curly-newline": [
      "error", {
        "consistent": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "never", {
        "objectsInObjects": true
      }
    ],
    "max-len": [
      2,
      80,
      4, {
        "ignoreUrls": true
      }
    ],
    "react/display-name": [
      0, {
        "ignoreTranspilerName": true
      }
    ]
  },
  "globals": {
    gapi: true
  }
}
