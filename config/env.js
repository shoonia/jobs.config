delete require.cache[require.resolve('./paths')];

process.on('unhandledRejection', (error) => {
  throw error;
});

module.exports = (buildEnv) => {
  process.env.BABEL_ENV = buildEnv;
  process.env.NODE_ENV = buildEnv;
};
