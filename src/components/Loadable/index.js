import { h } from 'preact';
import { Suspense, lazy } from 'preact/compat';

import s from './styles.css';

const fallback = (
  <div className={s.loader} />
);

function Loadable (loader) {
  const Component = lazy(loader);

  return function Load(props) {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
}

export default Loadable;
