import { create } from 'zustand';

import { VALIDATOR_VALUE_LIMIT } from '../constants';
import { getValidatorValue } from '../util/validatorValue';

interface IState {
  readonly value: string;
  setValue(value: string): void;
}

export const useValidatorStore = create<IState>((set) => ({
  value: getValidatorValue(),
  setValue: (value) => set({
    value: value.length > VALIDATOR_VALUE_LIMIT
      ? value.slice(0, VALIDATOR_VALUE_LIMIT + 10)
      : value,
  }),
}));
