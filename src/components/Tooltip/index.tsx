import type { FunctionComponent } from 'preact';
import { lazy, Suspense } from 'preact/compat';

const LazyTooltips: FunctionComponent = lazy(() => {
  return import('./Tooltip' /* webpackChunkName: "Tooltip" */).then((i) => {
    return i.Tooltips;
  });
});

export const Tooltips: FunctionComponent = () => (
  <Suspense fallback={null}>
    <LazyTooltips />
  </Suspense>
);
