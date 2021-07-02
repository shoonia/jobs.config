import { FunctionComponent } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

import s from './styles.css';
import { Label } from './Label';

interface Props {
  value: string;
  error: boolean;
}

export const Cron: FunctionComponent<Props> = ({ value, error }) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.setCustomValidity(error ? 'error': '');
  }, [error]);

  return (
    <Label top="A valid cron expression">
      <input
        ref={ref}
        type="text"
        className={s.mono}
        value={value}
        data-name="cronExpression"
        spellcheck={false}
        required
      />
    </Label>
  );
};
