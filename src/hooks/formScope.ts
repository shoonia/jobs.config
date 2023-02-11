import { memo, createContext, useContext } from 'preact/compat';

import { type IItem, newItem } from '../util/items';

const Context = createContext<IItem>(newItem());

export const FormScopeProvider = memo(Context.Provider, (prev, next) => {
  return prev.value === next.value;
});

export const useFormScope = (): IItem => {
  return useContext(Context);
};
