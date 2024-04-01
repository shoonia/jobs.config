import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert/strict';

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

  validList.forEach((path) => {
    it(`"${path}" should be valid "functionLocation"`, () => {
      strictEqual(isValidFunctionLocation(path), true);
    });
  });

  invalidList.forEach((path) => {
    it(`"${path}" should be invalid "functionLocation"`, () => {
      strictEqual(isValidFunctionLocation(path), false);
    });
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

  validList.forEach((path) => {
    it(`"${path}" should be valid "functionName"`, () => {
      strictEqual(isValidFunctionName(path), true);
    });
  });

  invalidList.forEach((path) => {
    it(`"${path}" should be invalid "functionName"`, () => {
      strictEqual(isValidFunctionName(path), false);
    });
  });
});
