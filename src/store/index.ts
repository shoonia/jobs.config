import { createStoreon } from 'storeon';

import { itemsModule, IItemsState, IItemsEvents } from './items';
import { routerModule, IRouterState, IRouterEvents } from './router';

export type TState = IItemsState & IRouterState;
export type TEvents = IItemsEvents & IRouterEvents;

export const store = createStoreon<TState, TEvents>([
  itemsModule,
  routerModule,
]);
