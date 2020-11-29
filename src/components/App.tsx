import { h, Fragment } from 'preact';
import { Suspense, lazy } from 'preact/compat';

import { Header } from './Header';
import { Fallback } from './Fallback';
import { useLazyRouter } from '../hooks/useLazyRouter';

const Tooltips = lazy(() => {
  return import('./Tooltip').then((i) => {
    return {
      default: i.Tooltips,
    };
  });
});

export function App() {
  const Page = useLazyRouter();

  return (
    <>
      <Header />
      <Suspense fallback={<Fallback />}>
        <Tooltips />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <Page />
      </Suspense>
    </>
  );
}
