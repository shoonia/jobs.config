import { isValidCron } from 'cron-validator';
import { toString } from 'cronstrue';

type CronResult = [
  isError: boolean,
  message: string,
];

const LESS_HOUR = /^every (\d+ )?(second|minute)s?\b/i;

export const useCron = (value: string): CronResult => {
  if (value.includes('?')) {
    return [
      true,
      'Velo Jobs Config does not support the blank syntax with "?" symbol',
    ];
  }

  try {
    const message = toString(value);

    if (LESS_HOUR.test(message)) {
      return [
        true,
        `"${message}"\n\nYou can schedule your job to run at intervals as short as one hour apart, but not shorter. If you define your job to run more frequently, the job will be ignored`,
      ];
    }

    const isError = !isValidCron(value, {
      seconds: false,
      allowBlankDay: false,
      allowSevenAsSunday: true,
      alias: true,
    });

    return [isError, message];
  } catch (error) {
    return [true, String(error)];
  }
};
