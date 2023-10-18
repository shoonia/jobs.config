const { relative, resolve } = require('node:path');
const { realpathSync } = require('node:fs');
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
const { GenerateSW } = require('workbox-webpack-plugin');
const manifest = require('./static/manifest.json');

const appDirectory = realpathSync(process.cwd());
const resolveApp = (relativePath) => resolve(appDirectory, relativePath);

const staticDir = resolveApp('static');
const srcDir = resolveApp('src');
const distDir = resolveApp('dist');
const nodeModulesDir = resolveApp('node_modules');

/**
 * @param {NodeJS.ProcessEnv} env
 * @returns {webpack.Configuration}
 */
module.exports = ({ NODE_ENV }) => {
  const isDev = NODE_ENV === 'development';
  const isProd = NODE_ENV === 'production';

  return {
    mode: NODE_ENV,
    bail: isProd,
    devtool: isDev && 'cheap-module-source-map',
    entry: resolveApp('src/main.tsx'),
    output: {
      iife: false,
      scriptType: 'module',
      path: isProd ? distDir : undefined,
      pathinfo: isDev,
      filename: '[name].[contenthash:4].js',
      chunkFilename: '[name].[chunkhash:4].js',
      publicPath: '',
      devtoolModuleFilenameTemplate: (i) => relative(srcDir, i.absoluteResourcePath),
      chunkLoadingGlobal: 'g',
      globalObject: 'self',
      clean: isProd,
    },
    optimization: {
      mangleExports: 'size',
      moduleIds: 'size',
      chunkIds: 'total-size',
      mergeDuplicateChunks: true,
      minimize: isProd,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
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
            name: 'styles',
            type: 'css/mini-extract',
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    resolve: {
      modules: [
        'node_modules',
        nodeModulesDir,
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
      },
    },
    externalsType: 'assign',
    externals: {
      // parse-json
      'is-arrayish': 'Array.isArray',
      '@babel/highlight': '{shouldHighlight(){}}',
      'chalk': '{grey:e=>e,red:{bold:e=>e}}',
      // react-modal
      'react-lifecycles-compat': '{polyfill(){}}',
      'exenv': '{canUseDOM:true}',
      'prop-types': 'undefined',
    },
    module: {
      parser: {
        javascript: {
          strictExportPresence: true,
          dynamicImportFetchPriority: 'high',
          dynamicImportPrefetch: true,
          harmony: true,
        },
      },
      rules: [
        {
          oneOf: [
            {
              test: /\.js?$/,
              include: nodeModulesDir,
              exclude: srcDir,
              loader: 'babel-loader',
              options: {
                cacheDirectory: isDev,
                cacheCompression: false,
                compact: isProd,
                plugins: [
                  './plugins/babel.cjs',
                ],
              },
            },
            {
              test: /\.tsx?$/,
              include: srcDir,
              loader: 'babel-loader',
              options: {
                cacheDirectory: isDev,
                cacheCompression: false,
                compact: isProd,
                presets: [
                  [
                    '@babel/preset-typescript',
                    {
                      optimizeConstEnums: true,
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
                ],
              },
            },
            {
              test: /\.css$/,
              use: [
                isProd
                  ? MiniCssExtractPlugin.loader
                  : 'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    sourceMap: isDev,
                    modules: isDev ? {
                      localIdentName: '[file]--[local]',
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
                        isProd && require('autoprefixer'),
                      ].filter(Boolean),
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: 'head',
        template: resolveApp('src/index.ejs'),
        scriptLoading: 'module',
        minify: isProd && {
          collapseWhitespace: 'aggressive',
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          sortAttributes: true,
        },
        templateParameters: {
          isProd,
          manifest,
        },
      }),
      isProd && new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].css',
        ignoreOrder: true,
      }),
      isProd && new HTMLInlineCSSWebpackPlugin({
        styleTagFactory: ({ style }) => `<style>${style}</style>`,
      }),
      isProd && new CopyPlugin({
        patterns: [
          {
            from: staticDir,
            to: distDir,
          },
        ],
      }),
      isProd && new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 15_000,
      }),
      new ForkTsCheckerWebpackPlugin({
        async: isDev,
        typescript: {
          configFile: resolveApp('tsconfig.json'),
        },
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'process.env.NODE_DEBUG': JSON.stringify(isDev),
        'process.env': 'undefined',
        'process.throwDeprecation': 'false',
        'process.noDeprecation': 'false',
        'process.emitWarning': 'undefined',
        'process.platform': 'undefined',
        'process': 'undefined',
      }),
      isProd && new GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        mode: NODE_ENV,
        sourcemap: isDev,
        inlineWorkboxRuntime: true,
        exclude: [
          '.DS_Store',
          'sitemap.xml',
        ],
      }),
    ].filter(Boolean),
    experiments: {
      backCompat: false,
      outputModule: true,
      topLevelAwait: true,
    },
    performance: false,
    node: false,
    devServer: {
      hot: true,
      compress: true,
      static: srcDir,
      port: 3000,
    },
  };
};
