import { isValidFunctionLocation, isValidFunctionName } from './validator';

describe('isValidFunctionLocation()', () => {
  const validList = [
    '/run.js',
    '/run.jsw',
    '/one/run.jsw',
    '/one/run.js',
    '/one/two_three.js',
    '/one/two-tree.js',
    '/one/two.tree.js',
    '/one/two/run.js',
    '/one/two/run.jsw',
    '/ONE.jsw',
  ];

  const invalidList = [
    'run.js',
    '/run.jsx',
    '//run.js',
    '/main//run.js',
    '/main/run.jsx',
    '/.main/run.js',
    '/main./run.js',
    '/main/.run.js',
    '/main/run.js.',
    '/main',
    '/main onw.js',
    '/main+onw.js',
    '/отакої.js',
  ];

  it.each(validList)('"%s" should be valid "functionLocation"', (path) => {
    expect(isValidFunctionLocation(path)).toBe(true);
  });

  it.each(invalidList)('"%s" should be invalid "functionLocation"', (path) => {
    expect(isValidFunctionLocation(path)).toBe(false);
  });
});

describe('isValidFunctionName()', () => {
  const validList = [
    'someName',
    'some2Name',
    '_someName',
    'some_name',
    '$someName',
    'some$Name',
  ];

  const invalidList = [
    '',
    ' ',
    'do',
    '1someName',
    'some Name',
    'some@Name',
  ];

  it.each(validList)('"%s" should be valid "functionName"', (name) => {
    expect(isValidFunctionName(name)).toBe(true);
  });

  it.each(invalidList)('"%s" should be invalid "functionName"', (name) => {
    expect(isValidFunctionName(name)).toBe(false);
  });
});
