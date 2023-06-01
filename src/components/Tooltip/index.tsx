import { lazy, Suspense } from 'preact/compat';

const LazyTooltips: FC = lazy(() => {
  return import('./Tooltip').then((i) => {
    return i.Tooltips;
  });
});

export const Tooltips: FC = () => (
  <Suspense fallback={null}>
    <LazyTooltips />
  </Suspense>
);
