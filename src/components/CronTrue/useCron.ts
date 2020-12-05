import { useMemo } from 'preact/hooks';
import { isValidCron } from 'cron-validator';
import { toString } from 'cronstrue';

type CronResult = [
  isError: boolean,
  message: string,
];

export const useCron = (value: string) => {
  return useMemo<CronResult>(() => {
    try {
      return [!isValidCron(value), toString(value)];
    } catch (error) {
      return [true, String(error)];
    }
  }, [value]);
};
