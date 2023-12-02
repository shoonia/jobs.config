import { createStoreon } from 'storeon';
import { useStoreon as _useStoreon } from 'storeon/preact';

import type { IState, IEvents } from './types';
import { appModule } from './appModule';
import { itemsModule } from './itemsModule';

export const store = createStoreon<IState, IEvents>([
  appModule,
  itemsModule,
]);

export const useStoreon = _useStoreon<IState, IEvents>;

export const useStore = () => store;
