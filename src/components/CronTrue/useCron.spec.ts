import { useCron } from './useCron';
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

describe('useCron', () => {
  it.each(invalidList)('should be invalid config with %s', (extension) => {
    expect(useCron(extension)).toEqual([true, expect.any(String)]);
  });

  it.each(list)('should be valid cron expression', (item) => {
    expect(useCron(item.value)).toEqual([false, expect.any(String)]);
  });
});
