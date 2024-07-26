import { useStoreon } from '../store';
import { ROUTER } from '../constants';
import { Builder } from './Builder';
import { Header } from './Header';
import { Tooltips } from './Tooltip';
import { UploadModal } from './UploadModal';
import { Validator } from './Validator';
import { Modal } from './Modal';

export const App: FC = () => {
  const path = useStoreon('path').path;
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
