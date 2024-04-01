import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert/strict';

import { parseCron } from './parseCron';
import list from '../components/Tooltip/CronExamplesTooltip/cronExamples.json' with { type: 'json' };

const invalidList = [
  '* * * * * * *',
  '* * * * * *',
  '* * * * *',
  '*/1 * * * * *',
  '*/2 * * * * *',
  '*/1 * * * *',
  '*/2 * * * *',

  '0 * * * 8',
  '0 * * * ?',
  '0 1 * * 3#2',
  '0 0 * * L',
  '0 0 LW * *',
];

describe('parseCron', () => {
  invalidList.forEach((extension) => {
    it(`should be invalid config with "${extension}"`, () => {
      const [hasError, message] = parseCron(extension);

      strictEqual(hasError, true);
      strictEqual(typeof message, 'string');
    });
  });

  list.forEach((i) => {
    it(`should be valid cron expression "${i.value}"`, () => {
      const [hasError, message] = parseCron(i.value);

      strictEqual(hasError, false);
      strictEqual(typeof message, 'string');
    });
  });
});
