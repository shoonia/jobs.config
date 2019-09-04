export function createConfig(items) {
  const config = {
    jobs: items.map((item) => {
      return {
        functionLocation: item.functionLocation,
        description: item.description,
        executionConfig: {
          time: item.time,
          dayOfWeek: item.dayOfWeek,
          dateInMonth: item.dateInMonth,
        },
      };
    }),
  };

  return JSON.stringify(config, null, 2);
}
