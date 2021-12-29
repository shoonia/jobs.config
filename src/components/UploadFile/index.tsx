import s from './styles.css';
import { readFile } from './readFile';
import { classNames } from '../../util/component';
import { IconUpload } from '../Icons/IconUpload';

interface Props {
  className?: string;
  onLoad?: (value: string) => void;
  onError?: (error: unknown) => void;
}

export const UploadFile: FC<Props> = ({ className, onLoad, onError }) => {
  const onChange: EventListener = ({ target }) => {
    readFile(target).then(onLoad, onError);
  };

  return (
    <label
      className={classNames([s.box, className])}
      aria-label="Upload your file"
      data-rh="Upload your file"
      data-rh-at="left"
    >
      <input
        type="file"
        className={s.file}
        onChange={onChange}
      />
      <IconUpload />
    </label>
  );
};
