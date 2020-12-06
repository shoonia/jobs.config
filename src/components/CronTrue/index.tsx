import { h } from 'preact';
import { lazy, Suspense } from 'preact/compat';

import { Props } from './CronTrue';

const LazyCronTrue = lazy(() => {
  return import('./CronTrue' /* webpackChunkName: "CronTrue" */).then((i) => {
    return {
      default: i.CronTrue,
    };
  });
});

export function CronTrue(props: Props) {
  return (
    <Suspense fallback={null}>
      {LazyCronTrue(props)}
    </Suspense>
  );
}
