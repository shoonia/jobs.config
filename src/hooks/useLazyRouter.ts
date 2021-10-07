import { FunctionComponent, lazy } from 'preact/compat';
import { useStoreon } from 'storeon/preact';

import type { IState } from '../store';
import { ROUTER } from '../constants';

const BuilderPage: FunctionComponent = lazy(() => {
  return import(
    /* webpackChunkName: "BuilderPage" */
    /* webpackPrefetch: true */
    '../components/BuilderPage'
  ).then((i) => {
    return i.BuilderPage;
  });
});

const ValidatorPage: FunctionComponent = lazy(() => {
  return import(
    /* webpackChunkName: "ValidatorPage" */
    /* webpackPrefetch: true */
    '../components/ValidatorPage'
  ).then((i) => {
    return i.ValidatorPage;
  });
});

export const useLazyRouter = (): FunctionComponent => {
  const { path } = useStoreon<IState>('path');

  switch (path) {
    case ROUTER.VALIDATOR: {
      return ValidatorPage;
    }
  }

  return BuilderPage;
};
