import type { TModule } from './types';
import { MAX_ITEMS } from '../constants';
import { type IItem, newItem } from '../util/items';

const key = 'items';

const getItems = (): IItem[] => {
  const data = localStorage.getItem(key);

  if (data != null) {
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

export const itemsModule: TModule = (store) => {
  store.on('@init', () => {
    return {
      items: getItems(),
    };
  });

  store.on('@changed', (_, { items }) => {
    if (Array.isArray(items)) {
      try {
        localStorage.setItem(key, JSON.stringify(items));
      } catch {
        localStorage.removeItem(key);
      }
    }
  });

  store.on('items/new', ({ items }) => {
    if (items.length < MAX_ITEMS) {
      return {
        items: [newItem(true), ...items],
      };
    }
  });

  store.on('items/remove', ({ items }, id) => {
    return {
      items: items.filter((item) => item.id !== id),
    };
  });

  store.on('items/clone', ({ items }, id) => {
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

  store.on('items/update', ({ items }, { id, name, value }) => {
    if (name) {
      return {
        items: items.map((item) => {
          return item.id === id
            ? { ...item, [name]: value }
            : item;
        }),
      };
    }
  });

  store.on('items/replace', (_, items) => ({ items }));

  store.on('items/up', ({ items }, id) => {
    const i = items.findIndex((item) => item.id === id);

    if (i > 0) {
      items.splice((i - 1), 0, items.splice(i, 1)[0]);

      return {
        items: [...items],
      };
    }
  });

  store.on('items/down', ({ items }, id) => {
    const i = items.findIndex((item) => item.id === id);
    const len = items.length;

    if (len > 1 && i < len) {
      items.splice((i + 1), 0, items.splice(i, 1)[0]);

      return {
        items: [...items],
      };
    }
  });
};
