import {
  WEEKLY,
  MONTHLY,
} from '../../constants';

function createFunctionLocation({ filename, funcname }) {
  return `/${filename}.${funcname}`;
}

export function createConfig(items) {
  const config = {
    jobs: items.map((item) => {
      const w = item.period === WEEKLY;
      const m = item.period === MONTHLY;

      return {
        functionLocation: createFunctionLocation(item),
        description: item.description !== '' ? item.description : undefined,
        executionConfig: {
          time: item.time,
          dayOfWeek: w && item.dayOfWeek !== '' ? item.dayOfWeek : undefined,
          dateInMonth: m ? item.dateInMonth : undefined,
        },
      };
    }),
  };

  return JSON.stringify(config, null, 2);
}
