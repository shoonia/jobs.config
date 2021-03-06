import { createContext, useContext } from 'preact/compat';

import { IItem, newItem } from '../util/items';

export const FormScope = createContext<IItem>(newItem());

export const useFormScope = (): IItem => {
  return useContext(FormScope);
};
