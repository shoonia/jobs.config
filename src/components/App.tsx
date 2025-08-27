import { ROUTER } from '../constants';
import { Builder } from './Builder';
import { Header } from './Header';
import { Tooltips } from './Tooltip';
import { UploadModal } from './UploadModal';
import { Validator } from './Validator';
import { Modal } from './Modal';
import { useRouter } from '../store-v2/useRouter';

export const App: FC = () => {
  const { path } = useRouter();
  const Page = path === ROUTER.VALIDATOR
    ? Validator
    : Builder;

  return (
    <>
      <Header />
      <Page />
      <Tooltips />
      <Modal open={path === ROUTER.UPLOAD}>
        <UploadModal />
      </Modal>
    </>
  );
};
