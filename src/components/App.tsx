import { h, Fragment, FunctionComponent } from 'preact';
import { Suspense, lazy } from 'preact/compat';

import { Header } from './Header';
import { Fallback } from './Fallback';
import { useLazyRouter } from '../hooks/useLazyRouter';

const Tooltips = lazy(() => {
  return import('./Tooltip' /* webpackChunkName: "Tooltip" */).then((i) => {
    return {
      default: i.Tooltips,
    };
  });
});

export const App: FunctionComponent = () => {
  const Page = useLazyRouter();

  return (
    <Fragment>
      <Header />
      <Suspense fallback={<Fallback />}>
        <Tooltips />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <Page />
      </Suspense>
    </Fragment>
  );
};
