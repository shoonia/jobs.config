import { isValidFunctionLocation } from './validator';

const validFLList = [
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

const invalidFLList = [
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

describe('isValidFunctionLocation()', () => {
  it.each(validFLList)('"%s" should be valid "functionLocation"', (path) => {
    expect(isValidFunctionLocation(path)).toBe(true);
  });

  it.each(invalidFLList)('"%s" should be invalid "functionLocation"', (path) => {
    expect(isValidFunctionLocation(path)).toBe(false);
  });
});
