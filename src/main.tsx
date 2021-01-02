import { h, render } from 'preact';
import { StoreContext } from 'storeon/preact';

import { App } from './components/App';
import { store } from './store';
import { sendBeacon } from './util/ga';
import './styles/main.css';

const root = document.getElementById('root') as HTMLDivElement;

render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  root,
);

if (process.env.NODE_ENV === 'production') {
  sendBeacon();
}
