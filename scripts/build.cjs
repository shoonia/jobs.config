const buildEnv = 'production';

require('../config/env.cjs')(buildEnv);

const webpack = require('webpack');
const configFactory = require('../config/webpack.config.cjs');
const paths = require('../config/paths.cjs');
const { measureFileSizesBeforeBuild, printFileSizesAfterBuild } = require('react-dev-utils/FileSizeReporter');
const printBuildError = require('react-dev-utils/printBuildError');

const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

(async () => {
  try {
    const previousFileSizes = await measureFileSizesBeforeBuild(paths.appBuild);

    const stats = await new Promise((resolve, reject) => {
      const config = configFactory(buildEnv);

      webpack(config, (error, stats) => {
        if (error) reject(error);
        else resolve(stats);
      });
    });

    const { warnings, errors } = stats.toJson({
      all: false,
      warnings: true,
      errors: true,
    });

    if (errors.length > 0) {
      return Promise.reject(new Error(errors[0].message));
    }

    warnings.forEach((warn) => {
      console.log(warn.message, '\n');
    });

    console.log('File sizes after gzip:\n');

    printFileSizesAfterBuild(
      stats,
      previousFileSizes,
      paths.appBuild,
      WARN_AFTER_BUNDLE_GZIP_SIZE,
      WARN_AFTER_CHUNK_GZIP_SIZE,
    );
  } catch (error) {
    const tscCompileOnError = process.env.TSC_COMPILE_ON_ERROR === 'true';

    if (tscCompileOnError) {
      console.log('Compiled with the following type errors:\n');
      printBuildError(error);
    } else {
      console.log('Failed to compile.\n');
      printBuildError(error);
      process.exit(1);
    }
  }
})();
