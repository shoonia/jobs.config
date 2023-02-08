import type { StoreonModule } from 'storeon';

import type { ROUTER } from '../constants';
import type { IItem } from '../util/items';

interface IUpdateEventData {
  readonly id: string;
  readonly name?: string;
  readonly value?: string;
}

export interface IEvents {
  // items
  'items/new': never;
  'items/remove': string;
  'items/clone': string;
  'items/update': IUpdateEventData;
  'items/replace': IItem[];
  'items/up': string;
  'items/down': string;
  // router
  'router/change': ROUTER;
  // validator
  'validator/input': string;
}

export interface IState {
  readonly items: IItem[];
  readonly path: ROUTER;
  readonly validatorValue: string;
}

export type TModule = StoreonModule<IState, IEvents>;
