import nanoid from 'nanoid';

const MAX = 20;

export default function (store) {
  store.on('@init', () => ({
    items: [],
  }));

  store.on('items/new', ({ items }) => {
    if ((items.length + 1) > MAX) {
      return;
    }

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

  store.on('items/remove', ({ items }, id) => {
    return {
      items: items.filter((item) => item.id !== id),
    };
  });

  store.on('items/clone', ({ items }, id) => {
    if ((items.length + 1) > MAX) {
      return;
    }

    const index = items.findIndex((item) => item.id === id);
    const clone = Object.assign({}, items[index], { id: nanoid(10) });

    items.splice(index, 0, clone);

    return {
      items: items.slice(),
    };
  });
}
