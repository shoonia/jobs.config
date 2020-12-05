import { createStoreon } from 'storeon';

import { itemsModule, IItemsState, IItemsEvents } from './items';
import { routerModule, IRouterState, IRouterEvents } from './router';
import { validatorModule, IValidatorState, IValidatorEvents } from './validator';

export type TState = IItemsState & IRouterState & IValidatorState;
export type TEvents = IItemsEvents & IRouterEvents & IValidatorEvents;

export const store = createStoreon<TState, TEvents>([
  itemsModule,
  routerModule,
  validatorModule,
]);
