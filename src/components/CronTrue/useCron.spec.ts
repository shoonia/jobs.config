import { useCron } from './useCron';

const invalidList = [
  '* * * * * * *',
  '* * * * * *',
  '* * * * *',
  '*/1 * * * * *',
  '*/2 * * * * *',
  '*/1 * * * *',
  '*/2 * * * *',
];

describe('useCron', () => {
  it.each(invalidList)('should be invalid every second/minute extension %s', (extension) => {
    expect(useCron(extension)).toEqual([true, expect.any(String)]);
  });
});
