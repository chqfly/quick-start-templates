module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-prettier/recommended"],
  rules: {
    "at-rule-no-unknown": null,
    "font-family-no-missing-generic-family-keyword": null,
    "no-descending-specificity": null,
    "at-rule-no-vendor-prefix": null,
    "block-no-empty": null,
    "length-zero-no-unit": true,
    "function-name-case": "lower",
    "value-keyword-case": "lower",
    "selector-type-case": "lower",
    "selector-class-pattern": null,
    "max-nesting-depth": 3,
    "alpha-value-notation": "number",
    "color-function-notation": "legacy",
    "property-no-vendor-prefix": null,
    "value-no-vendor-prefix": null,
    "media-feature-name-no-vendor-prefix": null,
    "keyframes-name-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "local", "export"],
      },
    ],
    "unit-no-unknown": [
      true,
      {
        ignoreUnits: ["rpx"],
      },
    ],
  },
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
};
