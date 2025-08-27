import { create } from 'zustand';

import { ROUTER } from '../constants';

interface IState {
  readonly path: ROUTER;
  to(path: ROUTER): void;
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

export const useRouter = create<IState>((set, get) => ({
  path: getPath(),

  to(path) {
    const state = get();

    if (state.path !== path) {
      set({ path });
    }
  },
}));

addEventListener('hashchange', () =>
  useRouter.getState().to(getPath()),
);
