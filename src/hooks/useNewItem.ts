import { useEffect } from 'preact/hooks';

import { useStore } from '../store';

export const useNewItem = (id: string, isNew?: boolean) => {
  const store = useStore();

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
