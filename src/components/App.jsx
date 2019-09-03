import { h } from 'preact';

import Grid from './Grid';
import Header from './Header';

function App() {
  return (
    <Grid
      header={<Header />}
      left="left"
      right="right"
    />
  );
}

export default App;
