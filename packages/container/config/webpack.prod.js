const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig  = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/"
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/marketing-entry.js`,
        auth: `auth@${domain}/auth/latest/auth-entry.js`,
        dashboard: `dashboard@${domain}/dashboard/latest/dashboard-entry.js`
      },
      shared: packageJson.dependencies
    })
  ]
}


module.exports = merge(commonConfig, prodConfig);