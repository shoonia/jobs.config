import { useCron } from './useCron';

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
];

describe('useCron', () => {
  it.each(invalidList)('should be invalid config with %s', (extension) => {
    expect(useCron(extension)).toEqual([true, expect.any(String)]);
  });
});
