import { h, render } from 'preact';
import StoreContext from 'storeon/preact/context';

import App from './components/App';

const root = document.getElementById('root');

render(
  <StoreContext.Provider value={{}}>
    <App />
  </StoreContext.Provider>,
  root
);
