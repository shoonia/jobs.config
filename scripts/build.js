const buildEnv = 'production';

require('../config/env')(buildEnv);

const webpack = require('webpack');
const configFactory = require('../config/webpack.config');
const paths = require('../config/paths');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const { measureFileSizesBeforeBuild, printFileSizesAfterBuild } = require('react-dev-utils/FileSizeReporter');
const printBuildError = require('react-dev-utils/printBuildError');

const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

(async () => {
  try {
    const previousFileSizes = await measureFileSizesBeforeBuild(paths.appBuild);

    const [stats, warnings] = await new Promise((resolve, reject) => {
      const config = configFactory(buildEnv);

      console.log('\nProduction build...\n');

      webpack(config, (error, stats) => {
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

        resolve([stats, messages.warnings]);
      });
    });

    if (warnings.length > 0) {
      console.log(
        'Compiled with warnings.\n\n\n',
        'Search for the keywords to learn more about each warning.',
        'To ignore, add // eslint-disable-next-line to the line before.\n',
      );
    } else {
      console.log('\nCompiled successfully.\n');
    }

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
