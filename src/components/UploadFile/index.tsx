import type { JSX } from 'preact';

import s from './styles.css';
import { readFile } from './readFile';
import { classNames } from '../../util/component';
import { IconUpload } from '../Icons/IconUpload';

interface Props {
  className?: string;
  onLoad?: (value: string) => void;
}

export const UploadFile: FC<Props> = ({ className, onLoad }) => {
  const onChange: JSX.GenericEventHandler<HTMLInputElement> = (event) =>
    readFile(event.currentTarget.files).then(onLoad);

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
