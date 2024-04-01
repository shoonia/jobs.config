import { useEffect } from 'preact/hooks';

import s from './CronTrue.css';
import { parseCron } from '../../util/parseCron';
import { classNames } from '../../util/component';

interface Props {
  value: string;
  setValidity: (isError: boolean) => void;
}

export const CronTrue: FC<Props> = ({ value, setValidity }) => {
  const [isError, message] = parseCron(value);

  useEffect(() => {
    setValidity(isError);
  }, [isError]);

  return (
    <div className={classNames([s.message, isError && s.error ])}>
      {message}
    </div>
  );
};
