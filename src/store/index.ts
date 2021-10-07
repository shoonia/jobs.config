import { createStoreon } from 'storeon';

import type { IState, IEvents } from './types';
import { itemsModule } from './items';
import { routerModule } from './router';
import { validatorModule } from './validatorValue';

export type { IState, IEvents };

export const store = createStoreon<IState, IEvents>([
  itemsModule,
  routerModule,
  validatorModule,
]);
