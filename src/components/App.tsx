import { Header } from './Header';
import { Tooltips } from './Tooltip';
import { UploadModal } from './UploadModal';
import { useLazyRouter } from '../hooks/useLazyRouter';

export const App: FC = () => {
  const Page = useLazyRouter();

  return (
    <>
      <Header />
      <Page />
      <Tooltips />
      <UploadModal />
    </>
  );
};
