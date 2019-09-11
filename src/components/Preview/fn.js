function createFunctionLocation({ filename, funcname }) {
  return `/${filename}.${funcname}`;
}

export function createConfig(items) {
  const config = {
    jobs: items.map((item) => {
      // const d = item.dateEnable === 'Daily';
      const w = item.dateEnable === 'Weekly';
      const m = item.dateEnable === 'Monthly';

      console.log(item.dateEnable)

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
