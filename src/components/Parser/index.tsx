import type { FunctionComponent } from 'preact';
import { lazy, Suspense } from 'preact/compat';

import type { Props } from './Parser';

const LazyParser: FunctionComponent<Props> = lazy(() => {
  return import('./Parser' /* webpackChunkName: "Parser" */).then((i) => {
    return i.Parser;
  });
});

export const Parser: FunctionComponent<Props> = (props) => (
  <Suspense fallback={null}>
    <LazyParser {...props} />
  </Suspense>
);
