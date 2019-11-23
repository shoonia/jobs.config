import { h, Fragment } from 'preact';

import Grid from './Grid';
import Header from './Header';
import Editor from './Editor';
import Preview from './Preview';
import { Tooltip } from './Tooltip';

function App() {
  return (
    <Fragment>
      <Tooltip />
      <Grid
        header={<Header />}
        left={<Editor />}
        right={<Preview />}
      />
    </Fragment>
  );
}

export default App;
