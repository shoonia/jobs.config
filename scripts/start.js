const buildEnv = 'development';

require('../config/env')(buildEnv);

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { createCompiler, prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const paths = require('../config/paths');
const configFactory = require('../config/webpack.config');
const { name } = require(paths.appPackageJson);

const host = '0.0.0.0';
const port = 3000;

const config = configFactory(buildEnv);
const urls = prepareUrls('http', host, port);

const devSocket = {
  warnings: (warnings) => devServer.sockWrite(devServer.sockets, 'warnings', warnings),
  errors: (errors) => devServer.sockWrite(devServer.sockets, 'errors', errors),
};

const compiler = createCompiler({
  appName: name,
  config,
  devSocket,
  urls,
  useYarn: false,
  useTypeScript: true,
  webpack,
});

const devServer = new WebpackDevServer(compiler, {
  compress: true,
  hot: true,
  historyApiFallback: {
    disableDotRule: true,
    index: paths.publicPath,
  },
  host,
  port,
  static: paths.appDirectory,
});

devServer.listen(port, host, (error) => {
  if (error) {
    return console.log(error);
  }
});

['SIGINT', 'SIGTERM'].forEach((sig) => {
  process.on(sig, () => {
    devServer.close();
    process.exit();
  });
});
