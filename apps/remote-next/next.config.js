const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui","@repo/jotai","@repo/hook"],
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote_next",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./page": "./pages/index.tsx",
          "./component": "./components/Component.tsx",
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
