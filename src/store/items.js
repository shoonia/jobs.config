import { MAX_ITEMS } from '../constants';
import { newItem } from '../util/items';
import { nanoid } from '../util/component';

const { sessionStorage } = window;

function getItems() {
  const data = sessionStorage.getItem('items');

  if (data !== null) {
    try {
      const items = JSON.parse(data);

      if (Array.isArray(items)) {
        return items;
      }
    } catch (error) {
      sessionStorage.removeItem('items');
    }
  }

  return [newItem()];
}

function payload(items) {
  return {
    items,
    isMax: items.length >= MAX_ITEMS,
  };
}

export const itemsModule = ({ on }) => {
  on('@init', () => {
    const items = getItems();

    return payload(items);
  });

  on('@changed', ({ items }, changes) => {
    if ('items' in changes) {
      try {
        sessionStorage.setItem('items', JSON.stringify(items));
      } catch (error) {
        sessionStorage.removeItem('items');
      }
    }

    return false;
  });

  on('items/new', ({ items, isMax }) => {
    if (isMax) {
      return false;
    }

    return payload([newItem(), ...items]);
  });

  on('items/remove', ({ items }, id) => {
    const newItems = items.filter((item) => item.id !== id);

    return payload(newItems);
  });

  on('items/clone', ({ items, isMax }, id) => {
    if (isMax) {
      return false;
    }

    const index = items.findIndex((item) => item.id === id);
    const clone = Object.assign({}, items[index], { id: nanoid() });

    items.splice(index, 0, clone);

    return payload([...items]);
  });

  on('items/update', ({ items }, { id, name, value }) => {
    const index = items.findIndex((item) => item.id === id);
    const item = Object.assign({}, items[index], { [name]: value });

    items.splice(index, 1, item);

    return payload([...items]);
  });
};
