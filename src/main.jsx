import { h, render } from 'preact';
import Storeon from 'storeon/preact/context';

import App from './components/App';
import store from './store';
import { sendBeacon } from './util';
import './styles.css';

const root = document.getElementById('root');

render(
  <Storeon.Provider value={store}>
    <App />
  </Storeon.Provider>,
  root,
);

if (document.location.hostname !== 'localhost') {
  sendBeacon();
}
