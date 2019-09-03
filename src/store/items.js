import nanoid from 'nanoid';

export default function (store) {
  store.on('@init', () => ({
    items: [],
  }));

  store.on('items/add', ({ items }) => {
    const item = {
      id: nanoid(10),
      filename: 'file_name',
      funcname: 'fanc_name',
      description: '',
      time: '00:00',
      dayOfWeek: '',
      dateInMonth: 1,
      dateEnable: false,
    };

    return {
      items: [item].concat(items),
    };
  });
}
