import { lazy } from 'preact/compat';
import { useStoreon } from 'storeon/preact';

import type { IState } from '../store';
import { ROUTER } from '../constants';

const BuilderPage: FC = lazy(() => {
  return import(
    /* webpackChunkName: "BuilderPage" */
    /* webpackPrefetch: true */
    '../components/BuilderPage'
  ).then((i) => {
    return i.BuilderPage;
  });
});

const ValidatorPage: FC = lazy(() => {
  return import(
    /* webpackChunkName: "ValidatorPage" */
    /* webpackPrefetch: true */
    '../components/ValidatorPage'
  ).then((i) => {
    return i.ValidatorPage;
  });
});

export const useLazyRouter = (): FC => {
  const { path } = useStoreon<IState>('path');

  switch (path) {
    case ROUTER.VALIDATOR: {
      return ValidatorPage;
    }
  }

  return BuilderPage;
};
