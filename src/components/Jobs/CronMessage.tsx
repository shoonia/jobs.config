import { h } from 'preact';
import { useEffect, useMemo } from 'preact/hooks';
import { toString } from 'cronstrue';

import s from './styles.css';

interface Props {
  value: string;
  setValidity: (error: string) => void;
}

const useCron = (value: string) => {
  type CronResult = [
    isValid: boolean,
    message: string,
  ];

  return useMemo<CronResult>(() => {
    try {
      return [true, toString(value)];
    } catch (error) {
      return [false, String(error)];
    }
  }, [value]);
};

export function CronMessage({ value, setValidity }: Props) {
  const [isValid, message] = useCron(value);

  useEffect(() => {
    setValidity(isValid ? '' : message);
  }, [isValid]);

  return (
    <span className={!isValid && s.error}>
      {message}
    </span>
  );
}
