import { StoreonModule } from 'storeon';
import { nanoid } from 'nanoid/non-secure';

import { MAX_ITEMS } from '../constants';
import { newItem, Item } from '../util/items';

const { sessionStorage } = window;

export interface ItemsState {
  items: Item[];
  isMax: boolean;
}

interface UpdateEventData {
  id: string;
  name: string;
  value: string;
}
export interface ItemsEvents {
  'items/new': never;
  'items/remove': string;
  'items/clone': string;
  'items/update':  UpdateEventData;
}

function getItems(): Item[] {
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

function payload(items: Item[]): ItemsState {
  return {
    items,
    isMax: items.length >= MAX_ITEMS,
  };
}

export const itemsModule: StoreonModule<ItemsState, ItemsEvents> = ({ on }) => {
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
  });

  on('items/new', ({ items, isMax }) => {
    if (isMax) {
      return;
    }

    return payload([newItem(), ...items]);
  });

  on('items/remove', ({ items }, id) => {
    const newItems = items.filter((item) => item.id !== id);

    return payload(newItems);
  });

  on('items/clone', ({ items, isMax }, id) => {
    if (isMax) {
      return;
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
