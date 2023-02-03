import { useEffect } from 'preact/hooks';

import { parseCron } from './parseCron';

interface Props {
  value: string;
  setValidity: (isError: boolean) => void;
}

export const CronTrue: FC<Props> = ({ value, setValidity }) => {
  const [isError, message] = parseCron(value);

  useEffect(() => {
    setValidity(isError);
  }, [isError]);

  return <>{message}</>;
};
