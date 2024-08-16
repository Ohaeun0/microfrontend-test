const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "test_app",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./page": "./pages/index.tsx",
        },
        remotes: {},
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
};
