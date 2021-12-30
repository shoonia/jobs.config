import btn from '../Button/styles.css';
import { isSupportFilePicker, saveFile } from './util';
import { IconDownload } from '../Icons/IconDownload';
import { Button } from '../Button';

interface Props {
  label?: string;
  jsonString: string;
}

export const DownloadButton: FC<Props> = ({
  label,
  jsonString,
}) => {
  if (isSupportFilePicker) {
    const onClick = (): void => {
      saveFile(jsonString);
    };

    return (
      <Button
        onClick={onClick}
        aria-label={label}
      >
        <IconDownload />
      </Button>
    );
  }

  return (
    <a
      href={`data:application/json,${encodeURIComponent(jsonString)}`}
      className={btn.btn}
      download="jobs.config"
      type="application/json"
      aria-label={label}
      tabIndex={0}
    >
      <IconDownload />
    </a>
  );
};
