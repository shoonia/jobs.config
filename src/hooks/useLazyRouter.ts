import { FunctionComponent, lazy } from 'preact/compat';
import { useStoreon } from 'storeon/preact';

import { TState } from '../store';
import { ROUTER } from '../constants';

const BuilderPage: FunctionComponent = lazy(() => {
  return import(
    /* webpackChunkName: "BuilderPage" */
    /* webpackPrefetch: true */
    '../components/BuilderPage'
  ).then((i) => {
    return {
      default: i.BuilderPage,
    };
  });
});

const ValidatorPage: FunctionComponent = lazy(() => {
  return import(
    /* webpackChunkName: "ValidatorPage" */
    /* webpackPrefetch: true */
    '../components/ValidatorPage'
  ).then((i) => {
    return {
      default: i.ValidatorPage,
    };
  });
});

export const useLazyRouter = () => {
  const { path } = useStoreon<TState>('path');

  switch (path) {
    case ROUTER.VALIDATOR: {
      return ValidatorPage;
    }
  }

  return BuilderPage;
};
