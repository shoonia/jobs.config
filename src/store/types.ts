import type { StoreonModule } from 'storeon';

import type { ROUTER } from '../constants';
import type { IItem } from '../util/items';

export interface IUpdateEventData {
  readonly id: string;
  readonly name: string;
  readonly value: string;
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
  readonly items: IItem[];
  readonly isMax: boolean;
  // router
  readonly path: ROUTER;
  // validator
  readonly validatorValue: string;
}

export type TModule = StoreonModule<IState, IEvents>;
