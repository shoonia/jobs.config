const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');
const paths = require('./paths');

module.exports = (allowedHost, host) => ({
  compress: true,
  clientLogLevel: 'none',
  contentBase: paths.appSrc,
  contentBasePublicPath: paths.publicUrlOrPath,
  watchContentBase: true,
  hot: true,
  transportMode: 'ws',
  injectClient: false,
  publicPath: paths.publicUrlOrPath,
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
});
