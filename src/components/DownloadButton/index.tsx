import btn from '../Button/styles.css';
import { isSupportFilePicker, saveFile } from './util';
import { IconDownload } from '../Icons/IconDownload';
import { Button } from '../Button';

interface Props {
  label: string;
  data: string;
}

export const DownloadButton: FC<Props> = ({
  label,
  data,
}) => {
  if (isSupportFilePicker) {
    const onClick = () => saveFile(data);

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
      href={`data:application/json,${encodeURIComponent(data)}`}
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
