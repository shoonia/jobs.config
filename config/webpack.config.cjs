const { relative } = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CSSMQPackerPlugin = require('css-mqpacker-webpack-plugin');
const createLocalIdent = require('mini-css-class-name/css-loader');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const { appPaths } = require('./paths.cjs');
const { homepage } = require(appPaths.appPackageJson);

exports.configFactory = (buildEnv) => {
  const isDev = buildEnv === 'development';
  const isProd = buildEnv === 'production';

  return {
    mode: buildEnv,
    bail: isProd,
    devtool: isDev && 'cheap-module-source-map',
    entry: [
      isDev && 'react-dev-utils/webpackHotDevClient',
      appPaths.appIndexTs,
    ].filter(Boolean),
    output: {
      path: isProd ? appPaths.appBuild : undefined,
      pathinfo: isDev,
      filename: 'js/[name].[contenthash:4].js',
      chunkFilename: 'js/[name].[chunkhash:4].js',
      publicPath: appPaths.publicPath,
      devtoolModuleFilenameTemplate: (info) => {
        return relative(appPaths.appSrc, info.absoluteResourcePath);
      },
      chunkLoadingGlobal: 'g',
      globalObject: 'window',
      clean: isProd,
    },
    optimization: {
      minimize: isProd,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: 2020,
            module: true,
            toplevel: true,
            parse: {
              ecma: 2020,
            },
            compress: {
              ecma: 2020,
              module: true,
              comparisons: false,
              inline: 2,
              drop_console: true,
              passes: 3,
              toplevel: true,
              pure_getters: true,
            },
            output: {
              ecma: 2020,
              comments: false,
            },
          },
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                  removeAllButFirst: true,
                },
              },
            ],
          },
        }),
        new CSSMQPackerPlugin(),
      ],
      splitChunks: {
        cacheGroups: {
          vendors: false,
          styles: {
            name: "styles",
            type: "css/mini-extract",
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
    resolve: {
      modules: [
        'node_modules',
        appPaths.appNodeModules,
      ],
      extensions: [
        '.js',
        '.ts',
        '.tsx',
      ],
      fallback: {
        util: false,
      },
      alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      }
    },
    externals: {
      'color-convert': '{}', // A dead code. It's a dependency of "parse-json" that not use.
      'supports-color': 'false',
      'escape-string-regexp': '()=>{}'
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          oneOf: [
            {
              test: /\.(js|tsx?)$/,
              include: appPaths.appSrc,
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                cacheCompression: false,
                compact: isProd,
                presets: [
                  '@babel/typescript',
                  [
                    '@babel/preset-env',
                    {
                      loose: true,
                      browserslistEnv: buildEnv,
                      configPath: appPaths.appDirectory,
                      useBuiltIns: 'entry',
                    },
                  ],
                ],
                plugins: [
                  [
                    '@babel/transform-react-jsx',
                    {
                      runtime: 'automatic',
                      importSource: 'preact',
                    },
                  ],
                  [
                    'const-enum',
                    {
                      transform: 'constObject',
                    },
                  ],
                ],
              },
            },
            {
              test: /\.css$/,
              use: [
                isDev && 'style-loader',
                isProd && MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    sourceMap: isDev,
                    modules: isDev ? {
                      localIdentName: '[local]_[hash:base64:4]',
                    } : {
                      getLocalIdent: createLocalIdent(),
                    },
                  },
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: isDev,
                    postcssOptions: {
                      plugins: [
                        require('postcss-import'),
                        require('postcss-simple-vars'),
                        isProd && require('autoprefixer')({
                          flexbox: 'no-2009',
                        }),
                      ].filter(Boolean),
                    },
                  },
                },
              ].filter(Boolean),
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: 'head',
        template: appPaths.appHtml,
        scriptLoading: 'defer',
        minify: isProd && {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          sortAttributes: true,
        },
        templateParameters: {
          homepage,
          isProd,
        },
      }),
      isProd && new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:4].css',
        chunkFilename: 'css/[name].[chunkhash:4].css',
      }),
      isProd && new HTMLInlineCSSWebpackPlugin({
        leaveCSSFile: true,
      }),
      isProd && new CopyPlugin({
        patterns: [
          {
            from: appPaths.appStatic,
            to: appPaths.appBuild,
          },
        ],
      }),
      isProd && new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 15_000,
      }),
      isDev && new webpack.HotModuleReplacementPlugin(),
      isDev && new ForkTsCheckerWebpackPlugin({
        async: isDev,
        typescript: {
          configFile: appPaths.appTsConfig,
        },
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(buildEnv),
        'process.env.NODE_DEBUG': JSON.stringify(isDev),
        'process.env': '({})',
        'process.throwDeprecation': 'false',
        'process.noDeprecation': 'false',
        'process.emitWarning': 'undefined',
        'process.platform': 'undefined',
        'process': 'undefined',
      }),
    ].filter(Boolean),
    experiments: {
      backCompat: false,
    },
    performance: false,
    node: false,
  };
};
