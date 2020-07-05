import { h, Fragment } from 'preact';

import Grid from './Grid';
import Header from './Header';
import Editor from './Editor';
import Preview from './Preview';
import Loadable from './Loadable';

const Tooltips = Loadable(() => import('./Tooltip'), false);

export function App() {
  return (
    <Fragment>
      <Tooltips />
      <Grid
        header={<Header />}
        left={<Editor />}
        right={<Preview />}
      />
    </Fragment>
  );
}
