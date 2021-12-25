const { setEnv } = require('../config/env.cjs');

const buildEnv = setEnv('development');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { createCompiler, prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const { appPaths } = require('../config/paths.cjs');
const { configFactory } = require('../config/webpack.config.cjs');
const { name } = require(appPaths.appPackageJson);

const host = '0.0.0.0';
const port = 3000;

const devServer = new WebpackDevServer({
    compress: true,
    hot: true,
    historyApiFallback: {
      disableDotRule: true,
      index: appPaths.publicPath,
    },
    host,
    port,
    static: appPaths.appDirectory,
  },
  createCompiler({
    appName: name,
    config: configFactory(buildEnv),
    urls: prepareUrls('http', host, port),
    devSocket: {
      warnings: (warnings) => devServer.sockWrite(devServer.sockets, 'warnings', warnings),
      errors: (errors) => devServer.sockWrite(devServer.sockets, 'errors', errors),
    },
    useYarn: false,
    useTypeScript: true,
    webpack,
  }),
);

devServer.start(port, host, (error) => {
  if (error) {
    throw error;
  }
});

['SIGINT', 'SIGTERM'].forEach((sig) => {
  process.on(sig, () => {
    devServer.stop();
    process.exit();
  });
});
