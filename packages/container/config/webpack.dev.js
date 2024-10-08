const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig  = require("./webpack.common");
const packageJson = require("../package.json");


const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/"
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  plugins : [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/marketing-entry.js",
        auth:      "auth@http://localhost:8082/auth-entry.js",
        dashboard: "dashboard@http://localhost:8083/dashboard-entry.js"
      },
      shared: packageJson.dependencies
    })
  ]
}

module.exports = merge(commonConfig, devConfig);
