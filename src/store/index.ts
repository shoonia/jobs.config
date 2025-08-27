import { createStoreon } from 'storeon';
import { useStoreon as _useStoreon } from 'storeon/preact';

import type { IState, IEvents } from './types';
import { itemsModule } from './itemsModule';

export const store = createStoreon<IState, IEvents>([
  itemsModule,
]);

export const useStoreon = _useStoreon<IState, IEvents>;

export const getState = store.get;
export const dispatch = store.dispatch;
