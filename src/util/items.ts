import { nanoid } from 'nanoid/non-secure';

import { KEYS, PERIOD } from '../constants';
import { isString } from './component';
import { isUTCTime } from './validator';
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

export interface IExecutionConfig {
  [KEYS.time]?: string;
  [KEYS.dayOfWeek]?: TWeekList;
  [KEYS.dateInMonth]?: number;
  [KEYS.cronExpression]?: string;
}

export interface IJob {
  [KEYS.functionLocation]: string;
  [KEYS.functionName]: string;
  [KEYS.description]?: string;
  [KEYS.executionConfig]: IExecutionConfig;
}

export interface IConfig {
  [KEYS.jobs]: IJob[];
}

const dTime = '00:00';
const dCron = '0 * * * *';
const dDay: TWeekList = weekList[0];

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

const getPeriod = (exec: IExecutionConfig): PERIOD => {
  if (KEYS.cronExpression in exec) {
    return PERIOD.CRON;
  }

  if (KEYS.dateInMonth in exec) {
    return PERIOD.MONTHLY;
  }

  if (KEYS.dayOfWeek in exec) {
    return PERIOD.WEEKLY;
  }

  return PERIOD.DAILY;
};

export const createConfig = (items: IItem[]): string => {
  const noop = undefined;

  const config: IConfig = {
    jobs: items.map((i) => {
      return {
        functionLocation: createLocation(i.functionLocation).trim(),
        functionName: i.functionName.trim(),
        description: (i.description !== '') ? i.description : noop,
        executionConfig: {
          time: (i.period !== PERIOD.CRON) ? (isUTCTime(i.time) ? i.time : dTime) : noop,
          dayOfWeek: (i.period === PERIOD.WEEKLY) ? i.dayOfWeek : noop,
          dateInMonth: (i.period === PERIOD.MONTHLY) ? parseDate(i.dateInMonth) : noop,
          cronExpression: (i.period === PERIOD.CRON) ? i.cronExpression.trim() : noop,
        },
      };
    }),
  };

  return JSON.stringify(config, null, 2);
};

export const newItem = (): IItem => ({
  id: nanoid(),
  functionLocation: '/function_location.js',
  functionName: 'function_name',
  description: '',
  time: dTime,
  dayOfWeek: dDay,
  dateInMonth: 1,
  cronExpression: dCron,
  period: PERIOD.DAILY,
});

export const createItems = (config: IConfig): IItem[] => {
  return config.jobs.map((i) => {
    const exec = i.executionConfig;

    return {
      id: nanoid(),
      functionLocation: i.functionLocation,
      functionName: i.functionName,
      description: isString(i.description) ? i.description : '',
      time: isUTCTime(exec.time) ? exec.time : dTime,
      dayOfWeek: isString(exec.dayOfWeek) ? exec.dayOfWeek : dDay,
      dateInMonth: parseDate(exec.dateInMonth),
      cronExpression: isString(exec.cronExpression) ? exec.cronExpression : dCron,
      period: getPeriod(exec),
    };
  });
};
