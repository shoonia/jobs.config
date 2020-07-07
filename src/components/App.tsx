import { h, Fragment } from 'preact';
import { Suspense, lazy } from 'preact/compat';

import { Grid } from './Grid';
import { Header } from './Header';
import { Editor } from './Editor';
import { Preview } from './Preview';

const Tooltips = lazy(() => {
  return import('./Tooltip').then((i) => {
    return {
      default: i.Tooltips,
    };
  });
});

export function App() {
  return (
    <Fragment>
      <Suspense fallback={null}>
        <Tooltips />
      </Suspense>
      <Grid
        header={<Header />}
        left={<Editor />}
        right={<Preview />}
      />
    </Fragment>
  );
}
