import { lazy, Suspense } from 'preact/compat';

const LazyModal: FC = lazy(() => {
  return import(
    /* webpackChunkName: "UploadModal" */
    './UploadModal'
  ).then((i) => i.UploadModal);
});

export const UploadModal: FC = () => (
  <Suspense fallback={null}>
    <LazyModal />
  </Suspense>
);
