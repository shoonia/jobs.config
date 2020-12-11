const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CSSMQPackerPlugin = require('css-mqpacker-webpack-plugin');
const createLocalIdent = require('mini-css-class-name/css-loader');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const paths = require('./paths');
const { homepage } = require(paths.appPackageJson);

module.exports = (buildEnv) => {
  const isDev = buildEnv === 'development';
  const isProd = buildEnv === 'production';

  return {
    mode: buildEnv,
    bail: isProd,
    devtool: isDev && 'cheap-module-source-map',
    entry: [
      isDev && require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appIndexTs,
    ].filter(Boolean),
    output: {
      path: isProd ? paths.appBuild : undefined,
      pathinfo: isDev,
      filename: 'js/[name].[contenthash:4].js',
      chunkFilename: 'js/[name].[chunkhash:4].js',
      publicPath: paths.publicUrlOrPath,
      devtoolModuleFilenameTemplate: (info) => path
        .relative(paths.appSrc, info.absoluteResourcePath)
        .replace(/\\/g, '/'),
      chunkLoadingGlobal: 'jobsConfig',
      globalObject: 'window',
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
              ecma: 2018,
            },
            compress: {
              ecma: 2018,
              module: true,
              comparisons: false,
              inline: 2,
              drop_console: true,
              passes: 5,
              toplevel: true,
              pure_getters: true,
            },
            output: {
              ecma: 2018,
              comments: false,
            },
          },
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            map: false,
          },
          cssProcessorPluginOptions: {
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
        },
      },
    },
    resolve: {
      modules: [
        'node_modules',
        paths.appNodeModules,
      ],
      extensions: [
        '.js',
        '.ts',
        '.tsx',
      ],
      fallback: {
        util: false,
      },
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
        {
          oneOf: [
            {
              test: /\.(js|tsx?)$/,
              include: paths.appSrc,
              loader: require.resolve('babel-loader'),
              options: {
                cacheDirectory: true,
                cacheCompression: false,
                compact: isProd,
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      loose: true,
                      browserslistEnv: buildEnv,
                      configPath: paths.appDirectory,
                    },
                  ],
                  [
                    '@babel/typescript',
                    {
                      jsxPragma: 'h',
                      jsxFragmentFactory: 'Fragment',
                    },
                  ],
                ],
                plugins: [
                  [
                    '@babel/transform-react-jsx',
                    {
                      pragma: 'h',
                      pragmaFrag: 'Fragment',
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
                isDev && require.resolve('style-loader'),
                isProd && MiniCssExtractPlugin.loader,
                {
                  loader: require.resolve('css-loader'),
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
                isProd && {
                  loader: require.resolve('postcss-loader'),
                  options: {
                    sourceMap: isDev,
                    postcssOptions: {
                      plugins: [
                        require('autoprefixer'),
                      ],
                    },
                  },
                },
              ].filter(Boolean),
            },
            {
              test: /\.png$/,
              loader: require.resolve('file-loader'),
              options: {
                name: '[name].[ext]',
                outputPath: '',
              },
            }
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: 'head',
        template: paths.appHtml,
        scriptLoading: 'defer',
        minify: isProd && {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
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
      isDev && new webpack.HotModuleReplacementPlugin(),
      isDev && new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: paths.appTsConfig,
        },
        eslint: {
          files: './src/**/*.{ts,tsx}',
        },
      }),
      new webpack.DefinePlugin({
        'process.platform': JSON.stringify(process.platform),
        'process.emitWarning': JSON.stringify(isDev),
        'process.throwDeprecation': JSON.stringify(isDev),
        'process.noDeprecation': JSON.stringify(isDev),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env': '{}',
        'process': 'undefined',
      }),
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ].filter(Boolean),
    performance: false,
  };
};
