/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const { readdir, readFile, writeFile, stat } = require('fs').promises;
const { join, extname } = require('path');
const Bundler = require('parcel-bundler');
const { minify } = require('terser');
const filesize = require('filesize');

const entry = join(__dirname, './src/index.html');
const distDir = join(__dirname, './dist');

process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

/**@type {Bundler.ParcelOptions} */
const buildOptions = {
  outDir: distDir,
  outFile: 'index.html',
  publicUrl: './',
  watch: false,
  cache: false,
  contentHash: false,
  minify: true,
  scopeHoist: true,
  target: 'browser',
  logLevel: 3,
  sourceMaps: false,
  detailedReport: false,
  hmr: false,
};

/**@type {import('terser').MinifyOptions} */
const minifyOptions = {
  ecma: 2015,
  module: true,
  toplevel: true,
  parse: {
    ecma: 2015,
  },
  compress: {
    ecma: 2015,
    module: true,
    comparisons: false,
    inline: 2,
    drop_console: true,
    passes: 3,
    unsafe_methods: true,
    toplevel: true,
    pure_getters: true,
    unsafe: true,
    unsafe_math: true,
  },
  format: {
    ecma: 2015,
    comments: false,
  },
};

(async () => {
  await new Bundler(entry, buildOptions).bundle();

  console.log();

  for (const file of await readdir(distDir)) {
    if (extname(file) === '.js') {
      const jsFile = join(distDir, file);
      const jsCode = await readFile(jsFile, 'utf8');
      const { code } = await minify(jsCode, minifyOptions);

      await writeFile(jsFile, code, 'utf8');

      const { size } = await stat(jsFile);

      console.log(file, filesize(size));
    }
  }

  console.log();
  process.exit(0);
})();
