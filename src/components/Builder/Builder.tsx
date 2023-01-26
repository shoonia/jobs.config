import s from './styles.css';
import { useStoreon } from '../../store';
import { ROUTER } from '../../constants';
import { Editor } from '../Editor';
import { Preview } from '../Preview';
import { UploadModal } from '../UploadModal';

export const Builder: FC = () => {
  const { path } = useStoreon('path');

  const uploadModal = path === ROUTER.UPLOAD && (
    <UploadModal />
  );

  return (
    <div className={s.box}>
      <Editor />
      <Preview />
      {uploadModal}
    </div>
  );
};
