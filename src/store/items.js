import { nanoid } from 'nanoid/non-secure';

import { MAX_ITEMS } from '../constants';
import { newItem } from '../util/items';

/**
 * @typedef {import('../util/items').Item} Item;
 *
 * @typedef {{
 * items: Item[];
 * isMax: boolean;
 * }} Store;
 */

const { sessionStorage } = window;

/**
 * @returns {Item[]}
 */
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

/**
 * @param {Item[]} items
 * @returns {Store}
 */
function payload(items) {
  return {
    items,
    isMax: items.length >= MAX_ITEMS,
  };
}

/**
 * @param {import('storeon').StoreonStore<Store>} store
 */
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
