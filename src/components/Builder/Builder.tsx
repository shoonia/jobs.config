import s from './styles.css';
import { Editor } from '../Editor';
import { Preview } from '../Preview';

export const Builder: FC = () =>
  <div className={s.box}>
    <Editor />
    <Preview />
  </div>;
