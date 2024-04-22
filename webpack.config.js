/* eslint-env node */
import { resolve } from 'node:path';
import { realpathSync } from 'node:fs';
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import CssMqpackerPlugin from 'css-mqpacker-webpack-plugin';
import createLocalIdent from 'mini-css-class-name/css-loader';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLInlineCSSWebpackPlugin from 'html-inline-css-webpack-plugin';
import postcssImport from 'postcss-import';
import simpleVars from 'postcss-simple-vars';
import autoprefixer from 'autoprefixer';

import manifest from './static/manifest.json' with { type: 'json' };

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
const buildConfig = ({ NODE_ENV }) => {
  const isDev = NODE_ENV === 'development';
  const isProd = NODE_ENV === 'production';

  return {
    mode: NODE_ENV,
    cache: isDev,
    bail: isProd,
    devtool: isDev && 'cheap-module-source-map',
    entry: resolveApp('src/main.tsx'),
    output: {
      iife: false,
      module: true,
      scriptType: 'module',
      path: isProd ? distDir : undefined,
      pathinfo: isDev,
      filename: '[name].[contenthash:4].js',
      chunkFilename: '[name].[chunkhash:4].js',
      publicPath: '',
      chunkLoadingGlobal: 'g',
      globalObject: 'self',
      clean: isProd,
      environment: {
        arrowFunction: true,
        asyncFunction: true,
        bigIntLiteral: true,
        const: true,
        destructuring: true,
        dynamicImport: true,
        dynamicImportInWorker: true,
        forOf: true,
        globalThis: true,
        module: true,
        optionalChaining: true,
        templateLiteral: true,
      },
    },
    optimization: {
      mangleExports: 'size',
      moduleIds: 'size',
      chunkIds: 'total-size',
      mergeDuplicateChunks: true,
      removeAvailableModules: true,
      removeEmptyChunks: true,
      concatenateModules: true,
      minimize: isProd,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            ecma: 2020,
            module: true,
            toplevel: true,
            sourceMap: false,
            compress: {
              ecma: 2020,
              module: true,
              comparisons: false,
              inline: 2,
              drop_console: true,
              passes: 3,
              toplevel: true,
              pure_getters: true,
              unsafe: true,
              unsafe_arrows: true,
              unsafe_symbols: true,
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
        new CssMqpackerPlugin(),
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
      alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      },
    },
    externalsType: 'assign',
    externals: {
      // parse-json
      '@babel/highlight': '{shouldHighlight(){}}',
      'picocolors': '{}',
      // react-modal
      'react-lifecycles-compat': '{polyfill(){}}',
      'exenv': '{canUseDOM:true}',
      'prop-types': '{}',
      'warning': 'e=>e',
    },
    module: {
      parser: {
        javascript: {
          strictExportPresence: true,
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
                comments: isDev,
                compact: isProd,
                minified: isProd,
                plugins: [
                  resolveApp('plugins/babel.js'),
                  [
                    'babel-plugin-transform-remove-polyfill',
                    {
                      globalObjects: ['window', 'document'],
                      globalFunctions: ['requestAnimationFrame'],
                    },
                  ],
                  [
                    '@babel/plugin-transform-react-jsx',
                    {
                      runtime: 'automatic',
                      importSource: 'preact',
                    },
                  ],
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
                minified: isProd,
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
                    '@babel/plugin-transform-react-jsx',
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
                    modules: {
                      namedExport: false,
                      exportLocalsConvention: 'as-is',
                      ...(isDev
                        ? { localIdentName: '[file]--[local]' }
                        : { getLocalIdent: createLocalIdent() }),
                    },
                  },
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: isDev,
                    postcssOptions: {
                      plugins: [
                        postcssImport,
                        simpleVars,
                        isProd && autoprefixer,
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
        filename: 'styles.css',
        ignoreOrder: true,
      }),
      isProd && new HTMLInlineCSSWebpackPlugin.default({
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
      new ForkTsCheckerWebpackPlugin({
        async: isDev,
        typescript: {
          configFile: resolveApp('tsconfig.json'),
        },
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'process.env.FORCE_COLOR': '0',
      }),
    ].filter(Boolean),
    experiments: {
      backCompat: false,
      outputModule: true,
      topLevelAwait: true,
      layers: true,
    },
    performance: false,
    node: false,
    devServer: {
      hot: false,
      compress: false,
      static: srcDir,
      port: 3000,
    },
  };
};

export { buildConfig as default };
