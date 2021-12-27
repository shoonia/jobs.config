import type { TModule } from './types';
import { ROUTER } from '../constants';

const getPath = (): ROUTER => {
  const hash = location.hash
    .trim()
    .toLowerCase();

  return (hash === ROUTER.VALIDATOR)
    ? ROUTER.VALIDATOR
    : ROUTER.BUILDER;
};

export const routerModule: TModule = ({ on, get, dispatch }) => {
  on('@init', () => {
    return {
      path: getPath(),
      openModal: false,
    };
  });

  on('router/change', (_, path) => ({ path }));
  on('router/open-modal', (_, openModal) => ({ openModal }));

  window.addEventListener('hashchange', () => {
    const { path } = get();
    const newPath = getPath();

    if (path !== newPath) {
      dispatch('router/change', newPath);
    }
  });
};
