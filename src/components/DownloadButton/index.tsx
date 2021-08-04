import type { FunctionComponent } from 'preact';

import s from './styles.css';
import { isSupportFilePicker, saveFile } from './util';

interface Props {
  label?: string;
  jsonString: string;
}

export const DownloadButton: FunctionComponent<Props> = ({
  label,
  jsonString,
}) => {
  if (isSupportFilePicker) {
    const onClick = (): void => {
      saveFile(jsonString);
    };

    return (
      <button
        type="button"
        className={s.btn}
        onClick={onClick}
        aria-label={label}
      />
    );
  }

  return (
    <a
      href={`data:application/json,${encodeURIComponent(jsonString)}`}
      className={s.btn}
      download="jobs.config"
      type="application/json"
      aria-label={label}
    />
  );
};
