import { h, render } from 'preact';
import { StoreContext } from 'storeon/preact';

import App from './components/App';
import store from './store';
import { sendBeacon } from './util/ga';
import './styles.css';

const root = document.getElementById('root');

render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  root,
);

if (document.location.hostname !== 'localhost') {
  sendBeacon();
}
