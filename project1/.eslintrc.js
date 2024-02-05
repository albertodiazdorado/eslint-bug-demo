module.exports = {
  root: true,
    extends: [
      "plugin:import/recommended",
    ],
    rules: {
      "import/no-extraneous-dependencies": [
        "error",
        { devDependencies: ["test/**/*.mjs"] },
        // Using this configuration instead yields the desired result
        // { devDependencies: ["**/*.test.mjs"] },
      ],
    },
  };
  