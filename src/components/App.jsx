import { h } from 'preact';

import Grid from './Grid';
import Header from './Header';
import Editor from './Editor';

function App() {
  return (
    <Grid
      header={<Header />}
      left={<Editor />}
      right="right"
    />
  );
}

export default App;
