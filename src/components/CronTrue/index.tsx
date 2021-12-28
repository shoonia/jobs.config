import { useEffect } from 'preact/hooks';

import { useCron } from './useCron';

export interface Props {
  value: string;
  setValidity: (isError: boolean) => void;
}

export const CronTrue: FC<Props> = ({ value, setValidity }) => {
  const [isError, message] = useCron(value);

  useEffect(() => {
    setValidity(isError);
  }, [isError]);

  return <>{message}</>;
};
