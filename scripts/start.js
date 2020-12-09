const buildEnv = 'development';

require('../config/env')(buildEnv);

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { createCompiler, prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const paths = require('../config/paths');
const configFactory = require('../config/webpack.config');
const createDevServerConfig = require('../config/webpackDevServer.config');

const HOST = '0.0.0.0';
const PORT = 3000;

const config = configFactory(buildEnv);
const appName = require(paths.appPackageJson).name;
const urls = prepareUrls('http', HOST, PORT);

const devSocket = {
  warnings: (warnings) => devServer.sockWrite(devServer.sockets, 'warnings', warnings),
  errors: (errors) => devServer.sockWrite(devServer.sockets, 'errors', errors),
};

/**@type {*} */
const compilerOptions = {
  appName,
  config,
  devSocket,
  urls,
  useYarn: false,
  useTypeScript: true,
  webpack,
};

const compiler = createCompiler(compilerOptions);
/**@type {*} */
const serverConfig = createDevServerConfig(urls.lanUrlForConfig, HOST);
const devServer = new WebpackDevServer(compiler, serverConfig);

devServer.listen(PORT, HOST, (error) => {
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
