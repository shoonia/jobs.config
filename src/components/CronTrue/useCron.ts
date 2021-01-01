import { isValidCron } from 'cron-validator';
import { toString } from 'cronstrue';

type CronResult = [
  isError: boolean,
  message: string,
];

const LESS_HOUR = /^every (\d+ )?(second|minute)s?\b/i;

export const useCron = (value: string): CronResult => {
  try {
    const message = toString(value);

    if (LESS_HOUR.test(message)) {
      return [true, message];
    }

    const isError = !isValidCron(value, {
      seconds: false,
    });

    return [isError, message];
  } catch (error) {
    return [true, String(error)];
  }
};
