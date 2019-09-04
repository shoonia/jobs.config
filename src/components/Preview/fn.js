function createFunctionLocation({ filename, funcname }) {
  return `/${filename}.${funcname}`;
}

export function createConfig(items) {
  const config = {
    jobs: items.map((item) => {
      return {
        functionLocation: createFunctionLocation(item),
        description: item.description || undefined,
        executionConfig: {
          time: item.time,
          dayOfWeek: item.dateEnable ? item.dayOfWeek : undefined,
          dateInMonth: item.dateEnable ? undefined : item.dateInMonth,
        },
      };
    }),
  };

  return JSON.stringify(config, null, 2);
}
