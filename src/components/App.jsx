import { h } from 'preact';

import Grid from './Grid';
import Header from './Header';
import Editor from './Editor';
import Preview from './Preview';

function App() {
  return (
    <Grid
      header={<Header />}
      left={<Editor />}
      right={<Preview />}
    />
  );
}

export default App;
