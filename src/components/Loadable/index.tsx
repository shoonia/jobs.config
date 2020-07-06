import { h } from 'preact';
import { Suspense, lazy } from 'preact/compat';

import s from './styles.css';

// TODO:
type TLoader = () => Promise<any>;

export function Loadable(loader: TLoader, showFallback: boolean) {
  // TODO:
  const Component = lazy<any>(loader);

  const fallback = showFallback
    ? <div className={s.loader} />
    : null;

  return function Load(props) {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
}
