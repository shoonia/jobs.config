import { createStoreon } from 'storeon';

import { itemsModule, ItemsState, ItemsEvents } from './items';

export default createStoreon<ItemsState, ItemsEvents>([
  itemsModule,
]);
