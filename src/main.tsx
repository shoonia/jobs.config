import { render } from 'preact';

import { App } from './components/App';
import './styles/main.css';

render(
  <App />,
  document.getElementById('root') as HTMLDivElement,
);
