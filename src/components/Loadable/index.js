import { h } from 'preact';
import { Suspense, lazy } from 'preact/compat';

import s from './styles.css';

const Fallback = (
  <div className={s.loader} />
);

function Loadable(loader, showFallback) {
  const Component = lazy(loader);
  const fallback = showFallback ? Fallback : null;

  return function Load(props) {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
}

export default Loadable;
