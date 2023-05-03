import type { TModule } from './types';
import { MAX_ITEMS } from '../constants';
import { type IItem, newItem } from '../util/items';

const key = 'items';

const getItems = (): IItem[] => {
  const data = localStorage.getItem(key);

  if (data !== null) {
    try {
      const items = JSON.parse(data);

      if (Array.isArray(items)) {
        return items;
      }
    } catch {
      localStorage.removeItem(key);
    }
  }

  return [newItem()];
};

export const itemsModule: TModule = ({ on }) => {
  on('@init', () => {
    return {
      items: getItems(),
    };
  });

  on('@changed', (_, { items }) => {
    if (Array.isArray(items)) {
      try {
        localStorage.setItem(key, JSON.stringify(items));
      } catch {
        localStorage.removeItem(key);
      }
    }
  });

  on('items/new', ({ items }) => {
    if (items.length < MAX_ITEMS) {
      return {
        items: [newItem(true), ...items],
      };
    }
  });

  on('items/remove', ({ items }, id) => {
    return {
      items: items.filter((item) => item.id !== id),
    };
  });

  on('items/clone', ({ items }, id) => {
    if (items.length < MAX_ITEMS) {
      const i = items.findIndex((item) => item.id === id);

      if (i > -1) {
        items.splice((i + 1), 0, {
          ...items[i],
          id: crypto.randomUUID(),
          isNew: true,
        });

        return {
          items: [...items],
        };
      }
    }
  });

  on('items/update', ({ items }, { id, name, value }) => {
    const i = items.findIndex((item) => item.id === id);

    if (i > -1 && name) {
      items.splice(i, 1, { ...items[i], [name]: value });

      return {
        items: [...items],
      };
    }
  });

  on('items/replace', (_, items) => ({ items }));

  on('items/up', ({ items }, id) => {
    const i = items.findIndex((item) => item.id === id);

    if (i > 0) {
      const [item] = items.splice(i, 1);

      items.splice((i - 1), 0, item);

      return {
        items: [...items],
      };
    }
  });

  on('items/down', ({ items }, id) => {
    const i = items.findIndex((item) => item.id === id);
    const len = items.length;

    if (len > 1 && i < len) {
      const [item] = items.splice(i, 1);

      items.splice((i + 1), 0, item);

      return {
        items: [...items],
      };
    }
  });
};
