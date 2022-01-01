import { useStoreon } from 'storeon/preact';

import s from './styles.css';
import type { IState } from '../../store';
import { ROUTER } from '../../constants';
import { Editor } from '../Editor';
import { Preview } from '../Preview';
import { UploadModal } from '../UploadModal';

export const Builder: FC = () => {
  const { path } = useStoreon<IState>('path');

  const uploadModal = path === ROUTER.UPLOAD && (
    <UploadModal />
  );

  return (
    <div className={s.box}>
      <div className={s.column}>
        <Editor />
      </div>
      <div className={s.column}>
        <Preview />
      </div>
      {uploadModal}
    </div>
  );
};
