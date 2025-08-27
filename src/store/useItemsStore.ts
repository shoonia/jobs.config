import { create } from 'zustand';

import { type IItem, newItem } from '../util/items';
import { MAX_ITEMS } from '../constants';

interface IUpdateEventData {
  readonly id: string;
  readonly name?: string;
  readonly value?: string;
}

interface IState {
  readonly items: IItem[]
  add(): void;
  remove(id: string): void;
  clone(id: string): void;
  up(id: string): void;
  down(id: string): void;
  update(data: IUpdateEventData): void;
}

const key = 'items';

const getItems = (): IItem[] => {
  const data = localStorage.getItem(key);

  if (data) {
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

export const useItemsStore = create<IState>((set, get) => ({
  items: getItems(),

  add: () => {
    const { items } = get();

    if (items.length < MAX_ITEMS) {
      set({ items: [newItem(true), ...items] });
    }
  },

  remove: (id) => set((s) => ({ items: s.items.filter(i => i.id !== id) })),

  clone: (id) => {
    const { items } = get();

    if (items.length < MAX_ITEMS) {
      const i = items.findIndex((item) => item.id === id);

      if (i > -1) {
        items.splice((i + 1), 0, {
          ...items[i],
          id: crypto.randomUUID(),
          isNew: true,
        });

        set({ items });
      }
    }
  },

  update: ({ id, name, value }) => {
    const { items } = get();

    if (name) {
      set({
        items: items.map((item) => {
          return item.id === id
            ? { ...item, [name]: value }
            : item;
        }),
      });
    }
  },

  up: (id) => {
    const { items } = get();
    const i = items.findIndex((item) => item.id === id);

    if (i > 0) {
      items.splice((i - 1), 0, items.splice(i, 1)[0]);

      set({ items });
    }
  },

  down: (id) => {
    const { items } = get();
    const i = items.findIndex((item) => item.id === id);
    const len = items.length;

    if (len > 1 && i < len) {
      items.splice((i + 1), 0, items.splice(i, 1)[0]);

      set({ items });
    }
  },
}));

useItemsStore.subscribe(({ items }) => {
  if (Array.isArray(items)) {
    try {
      localStorage.setItem(key, JSON.stringify(items));
    } catch {
      localStorage.removeItem(key);
    }
  }
});
