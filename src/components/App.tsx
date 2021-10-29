import { Suspense } from 'preact/compat';

import { Header } from './Header';
import { Fallback } from './Fallback';
import { Tooltips } from './Tooltip';
import { useLazyRouter } from '../hooks/useLazyRouter';

export const App: FC = () => {
  const Page = useLazyRouter();

  return (
    <>
      <Header />
      <Suspense fallback={<Fallback />}>
        <Page />
      </Suspense>
      <Tooltips />
    </>
  );
};
