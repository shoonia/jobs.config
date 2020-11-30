import { useMemo } from 'preact/hooks';
import { toString } from 'cronstrue';

type CronResult = [
  isError: boolean,
  message: string,
];

export const useCron = (value: string) => {
  return useMemo<CronResult>(() => {
    try {
      return [false, toString(value)];
    } catch (error) {
      return [true, String(error)];
    }
  }, [value]);
};
