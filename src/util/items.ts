import { KEYS, PERIOD } from '../constants';
import { isString } from './component';
import { isUTCTime } from './validator';
import { type TWeekList, weekList } from './week';

export interface IItem {
  readonly id: string;
  readonly functionLocation: string;
  readonly functionName: string;
  readonly description: string;
  readonly time: string;
  readonly dayOfWeek: TWeekList;
  readonly dateInMonth: number;
  readonly cronExpression: string;
  readonly period: PERIOD;
}

export interface IExecutionConfig {
  readonly [KEYS.time]?: string;
  readonly [KEYS.dayOfWeek]?: TWeekList;
  readonly [KEYS.dateInMonth]?: number;
  readonly [KEYS.cronExpression]?: string;
}

export interface IJob {
  readonly [KEYS.functionLocation]: string;
  readonly [KEYS.functionName]: string;
  readonly [KEYS.description]?: string;
  readonly [KEYS.executionConfig]: IExecutionConfig;
}

export interface IConfig extends Record<string, unknown> {
  readonly [KEYS.jobs]: IJob[];
}

const dTime = '00:00';
const dCron = '0 * * * *';
const dDay: TWeekList = weekList[0];

const createLocation = (location: string): string => {
  return location[0] !== '/' ? `/${location}` : location;
};

const parseDate = (date: unknown): number => {
  const t = ~~Number(date);

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
  let noop: undefined;

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
  id: crypto.randomUUID(),
  functionLocation: '/filename.js',
  functionName: 'funcName',
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
      id: crypto.randomUUID(),
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
