import { isValidCron } from 'cron-validator';
import { toString } from 'cronstrue';

type CronResult = readonly [
  isError: boolean,
  message: string,
];

const LESS_HOUR = /^every (\d+ )?(second|minute)s?\b/i;

const ex = (message: string): CronResult => [true, message];

export const parseCron = (value: string): CronResult => {
  try {
    const message = toString(value, {
      use24HourTimeFormat: true,
    });

    if (LESS_HOUR.test(message)) {
      return ex(
        `${message}\n\nSchedule too frequent: Jobs can only run at intervals of 1 hour or longer. Schedules with shorter intervals (seconds or minutes) are not supported and will be ignored.`,
      );
    }

    if (value.includes('?')) {
      return ex(
        `${message}\n\nUnsupported syntax: The question mark (?) wildcard is not supported in Velo Job Scheduler. Please use a specific value or asterisk (*) instead.`,
      );
    }

    if (value.includes('#')) {
      return ex(
        `${message}\n\nUnsupported syntax: The hash symbol (#) for nth occurrence (e.g., "3#2" for 3rd Tuesday) is not supported in Velo Job Scheduler.`,
      );
    }

    if (value.includes('@')) {
      return ex(
        `${message}\n\nUnsupported syntax: Named schedules like @daily, @weekly, @monthly, and @yearly are not supported. Please use standard cron syntax instead (e.g., "0 0 * * *" for daily).`,
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
      `${message}\n\nInvalid cron expression: "${value}" is not a valid cron syntax. Please check your expression format (minute hour day month day-of-week).`,
    );
  } catch (error) {
    return ex(String(error));
  }
};
