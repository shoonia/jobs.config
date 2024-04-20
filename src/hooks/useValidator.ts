import { useEffect, useRef } from 'preact/hooks';

import type { TValidator } from '../util/validator';

export const useValidator = (validator: TValidator) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      const listener = () => {
        const value = node.value.trim();

        if (node.value !== value) {
          node.value = value;
        }

        node.setCustomValidity(validator(value) ? '' : 'error');
      };

      node.addEventListener('input', listener);
      listener();
    }
  }, []);

  return ref;
};
