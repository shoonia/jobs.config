import { createStoreon } from 'storeon';
import { useStoreon as _useStoreon } from 'storeon/preact';

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
