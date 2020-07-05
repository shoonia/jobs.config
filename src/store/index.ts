import { createStoreon } from 'storeon';

import { itemsModule, ItemsState, ItemsEvents } from './items';

export const store = createStoreon<ItemsState, ItemsEvents>([
  itemsModule,
]);
