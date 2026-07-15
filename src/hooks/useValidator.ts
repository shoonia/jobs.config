import type { RefObject } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

import type { TValidator } from '../util/validator';

type TUseValidator = (
  validator: TValidator,
  transformer: (val: string) => string,
) => RefObject<HTMLInputElement>;

export const useValidator: TUseValidator = (validator, transformer) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      const listener = () => {
        const value = transformer(node.value);

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
