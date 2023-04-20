const { resolve } = require('path');
const { realpathSync } = require('fs');

const appDirectory = realpathSync(process.cwd());
const resolveApp = (relativePath) => resolve(appDirectory, relativePath);

exports.appPaths = {
  appSrc: resolveApp('src'),
  appHtml: resolveApp('src/index.ejs'),
  appIndexTs: resolveApp('src/main.tsx'),
  appPackageJson: resolveApp('package.json'),
  appBuild: resolveApp('dist'),
  appStatic: resolveApp('static'),
  appTsConfig: resolveApp('tsconfig.json'),
  appNodeModules: resolveApp('node_modules'),
  manifestJson: resolveApp('static/manifest.json'),
  publicPath: '',
  appDirectory,
};
