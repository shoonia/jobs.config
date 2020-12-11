const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  appSrc: resolveApp('src'),
  appHtml: resolveApp('src/index.ejs'),
  appIndexTs: resolveApp('src/main.tsx'),
  appPackageJson: resolveApp('package.json'),
  appBuild: resolveApp('dist'),
  appStatic: resolveApp('static'),
  appTsConfig: resolveApp('tsconfig.json'),
  appNodeModules: resolveApp('node_modules'),
  publicUrlOrPath: '',
  appDirectory,
};
