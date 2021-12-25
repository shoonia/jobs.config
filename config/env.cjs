/**
 * @template T
 * @param {T} buildEnv
 * @returns T
 */
exports.setEnv = (buildEnv) => {
  delete require.cache[require.resolve('./paths.cjs')];

  process.on('unhandledRejection', (error) => {
    throw error;
  });

  process.env.BABEL_ENV = buildEnv;
  process.env.NODE_ENV = buildEnv;
  process.env.BROWSERSLIST_ENV = buildEnv;

  return buildEnv;
};
