import {
  WEEKLY,
  MONTHLY,
} from '../../constants';

function createLocation(functionLocation) {
  if (functionLocation[0] !== '/') {
    functionLocation = `/${functionLocation}`;
  }
  if (!/\.js(w)?$/.test(functionLocation)) {
    functionLocation += '.js';
  }

  return functionLocation;
}

function parseDate(date) {
  const t = parseInt(date, 10);

  if (isNaN(t) || t < 1) return 1;
  if (t > 31) return 31;

  return t;
}

export function createConfig(items) {
  const config = {
    jobs: items.map((item) => {
      return {
        functionLocation: createLocation(item.functionLocation),
        functionName: item.functionName,
        description: (item.description !== '') ? item.description : undefined,
        executionConfig: {
          time: item.time || '00:00',
          dayOfWeek: (item.period === WEEKLY) ? item.dayOfWeek : undefined,
          dateInMonth: (item.period === MONTHLY) ? parseDate(item.dateInMonth) : undefined,
        },
      };
    }),
  };

  return JSON.stringify(config, null, 2);
}
