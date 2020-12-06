const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');
const paths = require('./paths');

module.exports = (allowedHost, host) => {
  const ENV = process.env;

  return {
    disableHostCheck: ENV.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
    compress: true,
    clientLogLevel: 'none',
    contentBase: paths.appSrc,
    contentBasePublicPath: paths.publicUrlOrPath,
    watchContentBase: true,
    hot: true,
    transportMode: 'ws',
    injectClient: false,
    sockHost: ENV.WDS_SOCKET_HOST,
    sockPath: ENV.WDS_SOCKET_PATH,
    sockPort: ENV.WDS_SOCKET_PORT,
    publicPath: paths.publicUrlOrPath.slice(0, -1),
    quiet: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    https: false,
    host,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
      index: paths.publicUrlOrPath,
    },
    public: allowedHost,
    proxy: undefined,
    before(app, server) {
      app.use(evalSourceMapMiddleware(server));
      app.use(errorOverlayMiddleware());
    },
    after(app) {
      app.use(redirectServedPath(paths.publicUrlOrPath));
      app.use(noopServiceWorkerMiddleware(paths.publicUrlOrPath));
    },
  };
};
