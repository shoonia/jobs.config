import s from './styles.css';
import { Editor } from '../Editor';
import { Preview } from '../Preview';
import { UploadModal } from '../UploadModal';

export const Builder: FC = () =>
  <div className={s.box}>
    <Editor />
    <Preview />
    <UploadModal />
  </div>;
