import { lazy } from 'preact/compat';
import { useStoreon } from 'storeon/preact';

import { TState } from '../store';
import { ROUTER } from '../constants';
import { CronTrue } from '../components/CronTrue';

const BuilderPage = lazy(() => {
  return import('../components/BuilderPage').then((i) => {
    return {
      default: i.BuilderPage,
    };
  });
});

const ValidatorPage = lazy(() => {
  return import('../components/ValidatorPage').then((i) => {
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

    // FIX: hotfix for unresolved module
    case ROUTER.FIX: {
      return CronTrue as null;
    }
  }

  return BuilderPage;
};