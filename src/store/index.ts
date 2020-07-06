import { createStoreon } from 'storeon';

import { itemsModule, IItemsState, IItemsEvents } from './items';

export const store = createStoreon<IItemsState, IItemsEvents>([
  itemsModule,
]);
