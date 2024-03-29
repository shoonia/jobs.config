import { render } from 'preact';
import { StoreContext } from 'storeon/preact';

import { App } from './components/App';
import { store } from './store';
import { gtag } from './util/gtag';
import './styles/main.css';

render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root') as HTMLDivElement,
);

gtag('js', new Date());
gtag('config', 'G-2W35Q7B86C');
