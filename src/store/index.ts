import { type StoreonStore, createStoreon } from 'storeon';
import { StoreContext, useStoreon as _useStoreon } from 'storeon/preact';
import { useContext } from 'preact/hooks';

import type { IState, IEvents } from './types';
import { itemsModule } from './items';
import { routerModule } from './router';
import { validatorModule } from './validatorValue';

export const store = createStoreon<IState, IEvents>([
  itemsModule,
  routerModule,
  validatorModule,
]);

export const useStoreon = _useStoreon<IState, IEvents>;

export const useStore = () => {
  return useContext(StoreContext) as StoreonStore<IState, IEvents>;
};
