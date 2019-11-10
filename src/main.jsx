import { h, render } from 'preact';
import { Provider } from 'storeon/preact/context';

import App from './components/App';
import store from './store';
import { sendBeacon } from './ga';
import './styles.css';

const root = document.getElementById('root');

render(
  <Provider value={store}>
    <App />
  </Provider>,
  root,
);

if (document.location.hostname !== 'localhost') {
  sendBeacon();
}
