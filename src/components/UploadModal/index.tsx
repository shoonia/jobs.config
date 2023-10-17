import { lazy, Suspense } from 'preact/compat';

const LazyModal: FC = lazy(() => {
  return import('./UploadModal').then((i) => i.UploadModal);
});

export const UploadModal: FC = () => (
  <Suspense fallback={null}>
    <LazyModal />
  </Suspense>
);
