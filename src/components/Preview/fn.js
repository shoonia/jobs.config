function createFunctionLocation({ filename, funcname }) {
  return `/${filename}.${funcname}`;
}

export function createConfig(items) {
  const config = {
    jobs: items.map((item) => {
      const isWeek = item.dateEnable === '1';

      return {
        functionLocation: createFunctionLocation(item),
        description: item.description || undefined,
        executionConfig: {
          time: item.time,
          dayOfWeek: isWeek ? item.dayOfWeek : undefined,
          dateInMonth: isWeek ? undefined : item.dateInMonth,
        },
      };
    }),
  };

  return JSON.stringify(config, null, 2);
}
