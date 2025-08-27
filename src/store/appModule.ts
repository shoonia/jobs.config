import type { TModule } from './types';
import { getValidatorValue } from '../util/validatorValue';
import { VALIDATOR_VALUE_LIMIT } from '../constants';

export const appModule: TModule = (store) => {
  store.on('@init', () => {
    return {
      validatorValue: getValidatorValue(),
    };
  });

  store.on('validator/input', (_, value) => {
    return {
      validatorValue: value.length > VALIDATOR_VALUE_LIMIT
        ? value.slice(0, VALIDATOR_VALUE_LIMIT + 10)
        : value,
    };
  });
};
