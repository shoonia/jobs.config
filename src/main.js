import { h, render } from 'preact';
import StoreContext from 'storeon/preact/context';

import App from './components/App';
import store from './store';
import './styles.css';

const root = document.getElementById('root');

render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  root
);
