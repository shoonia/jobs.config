import { StoreonModule } from 'storeon';

import { ROUTER } from '../constants';

export interface IRouterState {
  path: ROUTER;
}

export interface IRouterEvents {
  'router/change': ROUTER;
}

const getPath = (): ROUTER => {
  const hash = location.hash
    .trim()
    .toLocaleLowerCase();

  return (hash === ROUTER.VALIDATOR)
    ? ROUTER.VALIDATOR
    : ROUTER.BUILDER;
};

export const routerModule: StoreonModule<IRouterState, IRouterEvents> = ({ on, get, dispatch }) => {
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
