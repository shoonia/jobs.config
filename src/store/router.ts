import type { TModule } from './types';
import { ROUTER } from '../constants';

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

export const routerModule: TModule = ({ on, get, dispatch }) => {
  on('@init', () => ({ path: getPath() }));
  on('router/change', (_, path) => ({ path }));

  window.addEventListener('hashchange', () => {
    const { path } = get();
    const newPath = getPath();

    if (path !== newPath) {
      dispatch('router/change', newPath);
    }
  });
};
