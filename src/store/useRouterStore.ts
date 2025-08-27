import { create } from 'zustand';

import { ROUTER } from '../constants';

interface IState {
  readonly path: ROUTER;
}

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

export const useRouterStore = create<IState>((set) => {
  addEventListener('hashchange', () =>
    set({ path: getPath() }),
  );

  return {
    path: getPath(),
  };
});
