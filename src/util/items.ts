import { nanoid } from 'nanoid/non-secure';

import {
  WEEKLY,
  MONTHLY,
  CRON,
  DAILY,
} from '../constants';

export interface Item {
  id: string;
  functionLocation: string;
  functionName: string;
  description: string;
  time: string;
  dayOfWeek: string;
  dateInMonth: number;
  cronExpression: string;
  period: string;
}

const createLocation = (location: string): string => {
  const SLASH_CHAR_CODE = 47;

  return location.charCodeAt(0) !== SLASH_CHAR_CODE
    ? `/${location}`
    : location;
};

const parseDate = (date): number => {
  const t = parseInt(date, 10);

  if (isNaN(t) || t < 1) return 1;
  if (t > 31) return 31;

  return t;
};

export const createConfig = (items: Item[]): string => {
  const noop = undefined;

  const config = {
    jobs: items.map((i) => {
      return {
        functionLocation: createLocation(i.functionLocation).trim(),
        functionName: i.functionName.trim(),
        description: (i.description !== '') ? i.description : noop,
        executionConfig: {
          time: (i.period !== CRON) ? (i.time || '00:00') : noop,
          dayOfWeek: (i.period === WEEKLY) ? i.dayOfWeek : noop,
          dateInMonth: (i.period === MONTHLY) ? parseDate(i.dateInMonth) : noop,
          cronExpression: (i.period === CRON) ? i.cronExpression.trim() : noop,
        },
      };
    }),
  };

  return JSON.stringify(config, null, 2);
};

export const newItem = (): Item => {
  return {
    id: nanoid(),
    functionLocation: '/function_location.js',
    functionName: 'function_name',
    description: '',
    time: '00:00',
    dayOfWeek: 'Monday',
    dateInMonth: 1,
    cronExpression: '0 * * * *',
    period: DAILY,
  };
};
