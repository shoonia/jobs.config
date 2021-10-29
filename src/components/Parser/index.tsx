import { lazy, Suspense } from 'preact/compat';

import type { Props } from './Parser';

const LazyParser: FC<Props> = lazy(() => {
  return import('./Parser' /* webpackChunkName: "Parser" */).then((i) => {
    return i.Parser;
  });
});

export const Parser: FC<Props> = (props) => (
  <Suspense fallback={null}>
    <LazyParser {...props} />
  </Suspense>
);
