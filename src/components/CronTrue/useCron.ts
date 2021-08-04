import { isValidCron } from 'cron-validator';
import { toString } from 'cronstrue';

type CronResult = [
  isError: boolean,
  message: string,
];

const LESS_HOUR = /^every (\d+ )?(second|minute)s?\b/i;

const ex = (message: string): CronResult => [true, message];

export const useCron = (value: string): CronResult => {
  try {
    const message = toString(value, {
      use24HourTimeFormat: true,
    });

    if (LESS_HOUR.test(message)) {
      return ex(
        `${message}\n\nError: You can schedule your job to run at intervals as short as one hour apart, but not shorter. If you define your job to run more frequently, the job will be ignored.`,
      );
    }

    if (value.includes('?')) {
      return ex(
        `${message}.\n\nError: Velo Job Scheduler does not support the blank syntax with (?) symbol.`,
      );
    }

    if (value.includes('#')) {
      return ex(
        `${message}.\n\nError: Velo Job Scheduler does not support the hash (#) symbol.`,
      );
    }

    const isValid = isValidCron(value, {
      seconds: false,
      allowBlankDay: false,
      allowSevenAsSunday: true,
      alias: true,
    });

    if (isValid) {
      return [false, message];
    }

    return ex(
      `${message}.\n\nError: Velo Job Scheduler does not support this syntax.`,
    );
  } catch (error) {
    return ex(String(error));
  }
};
