const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const deps = require("./package.json").dependencies;

module.exports = withModuleFederationPlugin({
  name: "mfe-users",

  exposes: {
    "./routes": "./src/app/presentation/ui/routes",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    "shared-forms": {
      singleton: true,
      requiredVersion: deps["shared-forms"],
      strictVersion: false,
    },
    bootstrap: {
      singleton: true,
      strictVersion: true,
      requiredVersion: deps["bootstrap"],
    },
    "bootstrap-icons": {
      singleton: true,
      strictVersion: true,
      requiredVersion: deps["bootstrap-icons"],
    },
  },
});
