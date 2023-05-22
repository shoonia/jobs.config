import { type StoreonStore, createStoreon } from 'storeon';
import { StoreContext, useStoreon as _useStoreon } from 'storeon/preact';
import { useContext } from 'preact/hooks';

import type { IState, IEvents } from './types';
import { appModule } from './appModule';
import { itemsModule } from './itemsModule';

export const store = createStoreon<IState, IEvents>([
  appModule,
  itemsModule,
]);

export const useStoreon = _useStoreon<IState, IEvents>;

export const useStore = () => {
  return useContext(StoreContext) as StoreonStore<IState, IEvents>;
};
