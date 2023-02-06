import { useEffect } from 'preact/hooks';

import { store } from '../store';

export const useNewItem = (id: string, isNew?: boolean) => {
  useEffect(() => {
    if (isNew) {
      const t = setTimeout(() => {
        store.dispatch('items/update', {
          id,
          name: 'isNew',
          value: undefined,
        });
      }, 500);

      return () => clearTimeout(t);
    }
  }, []);
};
