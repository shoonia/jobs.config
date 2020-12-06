import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

import s from './styles.css';
import { Label } from './Label';

interface Props {
  value: string;
  error: boolean;
}

export const Cron = ({ value, error }: Props) => {
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    ref.current.setCustomValidity(error ? 'error': '');
  }, [error]);

  return (
    <Label top="A valid cron expression">
      <input
        ref={ref}
        type="text"
        className={s.cron}
        value={value}
        data-name="cronExpression"
        required
      />
    </Label>
  );
};
