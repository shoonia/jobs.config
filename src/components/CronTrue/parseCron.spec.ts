import { parseCron } from './parseCron';
import list from '../Tooltip/CronExamplesTooltip/cronExamples.json';

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
  it.each(invalidList)('should be invalid config with %s', (extension) => {
    expect(parseCron(extension)).toEqual([true, expect.any(String)]);
  });

  it.each(list)('should be valid cron expression', (item) => {
    expect(parseCron(item.value)).toEqual([false, expect.any(String)]);
  });
});
