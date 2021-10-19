delete require.cache[require.resolve('./paths.cjs')];

process.on('unhandledRejection', (error) => {
  throw error;
});

module.exports = (buildEnv) => {
  process.env.BABEL_ENV = buildEnv;
  process.env.NODE_ENV = buildEnv;
  process.env.BROWSERSLIST_ENV = buildEnv;
};
