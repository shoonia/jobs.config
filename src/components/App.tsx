import { h, Fragment, FunctionComponent } from 'preact';
import { Suspense } from 'preact/compat';

import { Header } from './Header';
import { Fallback } from './Fallback';
import { Tooltips } from './Tooltip';
import { useLazyRouter } from '../hooks/useLazyRouter';

export const App: FunctionComponent = () => {
  const Page = useLazyRouter();

  return (
    <Fragment>
      <Header />
      <Suspense fallback={<Fallback />}>
        <Page />
      </Suspense>
      <Tooltips />
    </Fragment>
  );
};
