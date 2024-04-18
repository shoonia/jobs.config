import type { TModule } from './types';
import { getValidatorValue } from '../util/validatorValue';
import { ROUTER, VALIDATOR_VALUE_LIMIT } from '../constants';

const getPath = (): ROUTER => {
  const hash = location.hash
    .trim()
    .toLowerCase();

  switch (hash) {
    case ROUTER.VALIDATOR:
    case ROUTER.UPLOAD:
      return hash;

    default:
      return ROUTER.BUILDER;
  }
};

export const appModule: TModule = (store) => {
  store.on('@init', () => {
    return {
      path: getPath(),
      validatorValue: getValidatorValue(),
    };
  });

  store.on('router/change', (state, path) => {
    if (state.path !== path) {
      return {
        path,
      };
    }
  });

  store.on('validator/input', (_, value) => {
    return {
      validatorValue: value.length > VALIDATOR_VALUE_LIMIT
        ? value.slice(0, VALIDATOR_VALUE_LIMIT + 10)
        : value,
    };
  });

  addEventListener('hashchange', () =>
    store.dispatch('router/change', getPath())
  );
};
