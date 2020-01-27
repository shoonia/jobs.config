import {
  WEEKLY,
  MONTHLY,
  CRON,
} from '../../constants';

function createLocation(location) {
  const SLASH_CHAR_CODE = 47;

  return location.charCodeAt(0) !== SLASH_CHAR_CODE
    ? `/${location}`
    : location;
}

function parseDate(date) {
  const t = parseInt(date, 10);

  if (isNaN(t) || t < 1) return 1;
  if (t > 31) return 31;

  return t;
}

export function createConfig(items) {
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
}
