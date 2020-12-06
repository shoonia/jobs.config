const buildEnv = 'development';

require('../config/env')(buildEnv);

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { choosePort, createCompiler, prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const paths = require('../config/paths');
const configFactory = require('../config/webpack.config');
const createDevServerConfig = require('../config/webpackDevServer.config');

const HOST = '0.0.0.0';
const PORT = 3000;

choosePort(HOST, PORT)
  .then((port) => {
    if (port == null) {
      return;
    }

    const config = configFactory(buildEnv);
    const protocol = 'http';
    const appName = require(paths.appPackageJson).name;
    const tscCompileOnError = process.env.TSC_COMPILE_ON_ERROR === 'true';

    const urls = prepareUrls(
      protocol,
      HOST,
      port,
    );

    const devSocket = {
      warnings: (warnings) => devServer.sockWrite(devServer.sockets, 'warnings', warnings),
      errors: (errors) => devServer.sockWrite(devServer.sockets, 'errors', errors),
    };

    const compiler = createCompiler({
      appName,
      config,
      devSocket,
      urls,
      useYarn: false,
      useTypeScript: true,
      tscCompileOnError,
      webpack,
    });

    const serverConfig = createDevServerConfig(urls.lanUrlForConfig, HOST);
    const devServer = new WebpackDevServer(compiler, serverConfig);

    devServer.listen(port, HOST, (error) => {
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

    if (process.stdout.isTTY || process.env.CI !== 'true') {
      process.stdin.on('end', () => {
        devServer.close();
        process.exit();
      });
      process.stdin.resume();
    }
  })
  .catch((error) => {
    if (error && error.message) {
      console.log(error.message);
    }
    process.exit(1);
  });
