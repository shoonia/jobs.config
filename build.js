/* eslint-env node */
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const Bundler = require('parcel-bundler');
const terser = require('terser');
const filesize = require('filesize');

const entry = path.join(__dirname, './src/index.html');
const distDir = path.join(__dirname, './dist');

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
  autoInstall: false,
};

const minifyOptions = {
  ecma: 8,
  module: true,
  parse: {
    ecma: 8,
  },
  compress: {
    ecma: 8,
    module: true,
    warnings: false,
    comparisons: false,
    inline: 2,
    drop_console: true,
    passes: 3,
    unsafe_methods: true,
  },
  output: {
    ecma: 8,
    comments: false,
    ascii_only: true,
  },
};

const bundler = new Bundler(entry, buildOptions);

fse.emptyDir(distDir);

bundler.bundle().then(() => {
  fs.readdirSync(distDir).forEach((file) => {
    if (path.extname(file) !== '.js') {
      return;
    }

    const jsFile = path.join(distDir, file);
    const jsCode = fs.readFileSync(jsFile, 'utf8');
    const { code } = terser.minify(jsCode, minifyOptions);

    fs.writeFileSync(jsFile, code, 'utf8');

    const { size } = fs.statSync(jsFile);

    console.log();
    console.log(file, filesize(size));
  });

  process.exit(0);
});

