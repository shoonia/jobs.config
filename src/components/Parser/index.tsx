import { h } from 'preact';
import { lazy, Suspense } from 'preact/compat';

import { Props } from './Parser';

const LazyParser = lazy(() => {
  return import('./Parser').then((i) => {
    return {
      default: i.Parser,
    };
  });
});

export function Parser(props: Props) {
  return (
    <Suspense fallback={null}>
      <LazyParser {...props} />
    </Suspense>
  );
}
