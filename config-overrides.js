const { override, fixBabelImports, addLessLoader, addPostcssPlugins } = require("customize-cra");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { exec } = require('child_process');

const addCustomize = () => config => {
  let plugins = [
    // new BundleAnalyzerPlugin()
  ]
  exec(`ts-node-dev --respawn --transpileOnly --project ${__dirname}/src/mock/mockconfig.json ${__dirname}/src/mock/app.ts`)
  config.plugins = [...config.plugins, ...plugins]
  return config;
}

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  }),
  addCustomize()
);
