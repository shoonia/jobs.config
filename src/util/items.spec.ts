import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert/strict';

import { parseDate } from './items';

describe('parseDate', () => {
  it('should return 1 for NaN values', () => {
    strictEqual(parseDate('invalid'), 1);
    strictEqual(parseDate('abc'), 1);
    strictEqual(parseDate(undefined), 1);
    strictEqual(parseDate(null), 1);
    strictEqual(parseDate({}), 1);
    strictEqual(parseDate([]), 1);
    strictEqual(parseDate(''), 1);
  });

  it('should return 1 for values less than 1', () => {
    strictEqual(parseDate(0), 1);
    strictEqual(parseDate(-1), 1);
    strictEqual(parseDate(-10), 1);
    strictEqual(parseDate('0'), 1);
    strictEqual(parseDate('-5'), 1);
  });

  it('should return 31 for values greater than 31', () => {
    strictEqual(parseDate(32), 31);
    strictEqual(parseDate(50), 31);
    strictEqual(parseDate(100), 31);
    strictEqual(parseDate('32'), 31);
    strictEqual(parseDate('999'), 31);
  });

  it('should return the correct value for valid dates (1-31)', () => {
    strictEqual(parseDate(1), 1);
    strictEqual(parseDate(15), 15);
    strictEqual(parseDate(31), 31);
    strictEqual(parseDate('1'), 1);
    strictEqual(parseDate('15'), 15);
    strictEqual(parseDate('31'), 31);
  });

  it('should handle decimal numbers by flooring them', () => {
    strictEqual(parseDate(1.9), 1);
    strictEqual(parseDate(15.7), 15);
    strictEqual(parseDate(31.1), 31);
    strictEqual(parseDate('1.9'), 1);
    strictEqual(parseDate('15.7'), 15);
    strictEqual(parseDate('31.1'), 31);
  });

  it('should handle edge cases', () => {
    strictEqual(parseDate(1.0), 1);
    strictEqual(parseDate(31.0), 31);
    strictEqual(parseDate('1.0'), 1);
    strictEqual(parseDate('31.0'), 31);
  });

  it('should handle string numbers with whitespace', () => {
    strictEqual(parseDate(' 15 '), 15);
    strictEqual(parseDate('  1  '), 1);
    strictEqual(parseDate('\t31\n'), 31);
  });

  it('should handle boolean values', () => {
    strictEqual(parseDate(true), 1); // Number(true) = 1
    strictEqual(parseDate(false), 1); // Number(false) = 0, which becomes 1
  });
});
