import { lazy, Suspense } from 'preact/compat';

const LazyTooltips: FC = lazy(() => {
  return import('./Tooltip' /* webpackChunkName: "Tooltip" */).then((i) => {
    return i.Tooltips;
  });
});

export const Tooltips: FC = () => (
  <Suspense fallback={null}>
    <LazyTooltips />
  </Suspense>
);
