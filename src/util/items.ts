import { nanoid } from 'nanoid/non-secure';

import { PERIOD } from '../constants';
import { TWeekList, weekList } from './week';

export interface IItem {
  id: string;
  functionLocation: string;
  functionName: string;
  description: string;
  time: string;
  dayOfWeek: TWeekList;
  dateInMonth: number;
  cronExpression: string;
  period: PERIOD;
}

const createLocation = (location: string): string => {
  const SLASH_CHAR_CODE = 47;

  return location.charCodeAt(0) !== SLASH_CHAR_CODE
    ? `/${location}`
    : location;
};

const parseDate = (date: number): number => {
  const t = ~~date;

  if (isNaN(t) || t < 1) return 1;
  if (t > 31) return 31;

  return t;
};

export const createConfig = (items: IItem[]): string => {
  const noop = undefined;

  const config = {
    jobs: items.map((i) => {
      return {
        functionLocation: createLocation(i.functionLocation).trim(),
        functionName: i.functionName.trim(),
        description: (i.description !== '') ? i.description : noop,
        executionConfig: {
          time: (i.period !== PERIOD.CRON) ? (i.time || '00:00') : noop,
          dayOfWeek: (i.period === PERIOD.WEEKLY) ? i.dayOfWeek : noop,
          dateInMonth: (i.period === PERIOD.MONTHLY) ? parseDate(i.dateInMonth) : noop,
          cronExpression: (i.period === PERIOD.CRON) ? i.cronExpression.trim() : noop,
        },
      };
    }),
  };

  return JSON.stringify(config, null, 2);
};

export const newItem = (): IItem => {
  return {
    id: nanoid(),
    functionLocation: '/function_location.js',
    functionName: 'function_name',
    description: '',
    time: '00:00',
    dayOfWeek: weekList[0],
    dateInMonth: 1,
    cronExpression: '0 * * * *',
    period: PERIOD.DAILY,
  };
};
