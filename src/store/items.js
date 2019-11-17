import nanoid from 'nanoid/non-secure';
import debounce from 'debounce';

import { MAX_ITEMS, DAILY } from '../constants';

const { sessionStorage } = window;

function createItem() {
  return [{
    id: nanoid(),
    functionLocation: '/function_location.js',
    functionName: 'function_name',
    description: '',
    time: '00:00',
    dayOfWeek: 'Monday',
    dateInMonth: 1,
    period: DAILY,
  }];
}

function getItems() {
  const data = sessionStorage.getItem('items');

  if (data == null) {
    return createItem();
  }

  try {
    const items = JSON.parse(data);
    return Array.isArray(items) ? items : createItem();
  } catch (error) {
    sessionStorage.clear();
    return createItem();
  }
}

function setItems(items) {
  try {
    sessionStorage.setItem('items', JSON.stringify(items));
  } catch (error) {
    sessionStorage.clear();
  }
}

export default function (store) {
  store.on('@init', () => ({
    items: getItems(),
  }));

  store.on('@changed', (state) => {
    setItems(state.items);
  });

  store.on('items/new', ({ items }) => {
    if ((items.length + 1) > MAX_ITEMS) {
      return;
    }

    return {
      items: createItem().concat(items),
    };
  });

  store.on('items/remove', ({ items }, id) => {
    return {
      items: items.filter((item) => item.id !== id),
    };
  });

  store.on('items/clone', ({ items }, id) => {
    if ((items.length + 1) > MAX_ITEMS) {
      return;
    }

    const index = items.findIndex((item) => item.id === id);
    const clone = Object.assign({}, items[index], { id: nanoid() });

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
  }, 250));
}
