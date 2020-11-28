import { h, Fragment } from 'preact';
import { Suspense, lazy } from 'preact/compat';
import { useStoreon } from 'storeon/preact';

import { Header } from './Header';
import { TEvents, TState } from '../store';
import { ROUTER } from '../constants';

const Tooltips = lazy(() => {
  return import('./Tooltip').then((i) => {
    return {
      default: i.Tooltips,
    };
  });
});

const HomePage = lazy(() => {
  return import('./HomePage').then((i) => {
    return {
      default: i.HomePage,
    };
  });
});

const ValidatorPage = lazy(() => {
  return import('./ValidatorPage').then((i) => {
    return {
      default: i.ValidatorPage,
    };
  });
});

export function App() {
  const { path } = useStoreon<TState, TEvents>('path');

  const Page = (path === ROUTER.HOME)
    ? HomePage
    : ValidatorPage;

  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Tooltips />
      </Suspense>
      <Suspense fallback={null}>
        <Page />
      </Suspense>
    </>
  );
}
