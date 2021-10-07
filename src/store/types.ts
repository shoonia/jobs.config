import type { StoreonModule } from 'storeon';

import type { ROUTER } from '../constants';
import type { IItem } from '../util/items';

export interface IUpdateEventData {
  id: string;
  name: string;
  value: string;
}

export interface IEvents {
  // items
  'items/new': never;
  'items/remove': string;
  'items/clone': string;
  'items/update': IUpdateEventData;
  'items/replace': IItem[];
  // router
  'router/change': ROUTER;
  // validator
  'validator/input': string;
}

export interface IState {
  // items
  items: IItem[];
  isMax: boolean;
  // router
  path: ROUTER;
  // validator
  validatorValue: string;
}

export type TModule = StoreonModule<IState, IEvents>;
