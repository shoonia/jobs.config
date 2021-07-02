import { FunctionComponent } from 'preact';
import { lazy, Suspense } from 'preact/compat';

import { Props } from './Parser';

const LazyParser: FunctionComponent<Props> = lazy(() => {
  return import('./Parser' /* webpackChunkName: "Parser" */).then((i) => {
    return i.Parser;
  });
});

export const Parser = (props: Props) => (
  <Suspense fallback={null}>
    <LazyParser {...props} />
  </Suspense>
);
