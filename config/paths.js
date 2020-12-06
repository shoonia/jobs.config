const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  appSrc: resolveApp('src'),
  appHtml: resolveApp('src/index.html'),
  appIndexTs: resolveApp('src/main.tsx'),
  favicon: resolveApp('src/assets/favicon.png'),
  appPackageJson: resolveApp('package.json'),
  appBuild: resolveApp('dist'),
  appStatic: resolveApp('static'),
  appTsConfig: resolveApp('tsconfig.json'),
  appNodeModules: resolveApp('node_modules'),
  publicUrlOrPath: '',
  appDirectory,
};
