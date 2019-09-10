import nanoid from 'nanoid';
import debounce from 'debounce';

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
      dateEnable: '0',
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

  store.on('items/update-debounce', ({ items }, { id, name, value }) => {
    const index = items.findIndex((item) => item.id === id);
    const item = Object.assign({}, items[index], { [name]: value });

    items.splice(index, 1, item);

    return {
      items: items.slice(),
    };
  });

  store.on('items/update', debounce((_, action) => {
    store.dispatch('items/update-debounce', action);
  }, 100));
}
