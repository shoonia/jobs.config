const buildEnv = 'production';

require('../config/env')(buildEnv);

const { emptyDir, copy } = require('fs-extra');
const webpack = require('webpack');
const configFactory = require('../config/webpack.config');
const paths = require('../config/paths');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const { measureFileSizesBeforeBuild, printFileSizesAfterBuild } = require('react-dev-utils/FileSizeReporter');
const printBuildError = require('react-dev-utils/printBuildError');

const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

/**@type {*} */
const config = configFactory(buildEnv);

measureFileSizesBeforeBuild(paths.appBuild)
  .then(async (previousFileSizes) => {
    await emptyDir(paths.appBuild);
    await copy(paths.appStatic, paths.appBuild);

    return build(previousFileSizes);
  })
  .then(({ stats, previousFileSizes, warnings }) => {
    if (warnings.length > 0) {
      console.log('Compiled with warnings.\n');
      console.log('\n\n');
      console.log(
        '\nSearch for the keywords to learn more about each warning.',
      );
      console.log(
        'To ignore, add // eslint-disable-next-line to the line before.\n',
      );
    } else {
      console.log('Compiled successfully.\n');
    }

    console.log('File sizes after gzip:\n');

    printFileSizesAfterBuild(
      stats,
      previousFileSizes,
      paths.appBuild,
      WARN_AFTER_BUNDLE_GZIP_SIZE,
      WARN_AFTER_CHUNK_GZIP_SIZE,
    );
  },
  (error) => {
    const tscCompileOnError = process.env.TSC_COMPILE_ON_ERROR === 'true';

    if (tscCompileOnError) {
      console.log('Compiled with the following type errors:\n');
      printBuildError(error);
    } else {
      console.log('Failed to compile.\n');
      printBuildError(error);
      process.exit(1);
    }
  })
  .catch((error) => {
    if (error && error.message) {
      console.log(error.message);
    }
    process.exit(1);
  });

function build(previousFileSizes) {
  console.log('Production build...');

  const compiler = webpack(config);

  return new Promise((resolve, reject) => {
    compiler.run((error, stats) => {
      let messages;

      if (error) {
        if (!error.message) {
          return reject(error);
        }

        let errMessage = error.message;

        // Add additional information for postcss errors
        if (Object.prototype.hasOwnProperty.call(error, 'postcssNode')) {
          errMessage +=
            '\nCompileError: Begins at CSS selector ' +
            error['postcssNode'].selector;
        }

        messages = formatWebpackMessages({
          errors: [errMessage],
          warnings: [],
        });
      } else {
        messages = formatWebpackMessages(
          stats.toJson({ all: false, warnings: true, errors: true }),
        );
      }

      if (messages.errors.length > 0) {
        return reject(new Error(messages.errors.join('\n\n')));
      }

      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      });
    });
  });
}
