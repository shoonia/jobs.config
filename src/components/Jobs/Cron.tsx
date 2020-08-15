import { h } from 'preact';
import { useEffect, useRef, useMemo } from 'preact/hooks';
import { toString } from 'cronstrue';

import s from './styles.css';
import { Label } from './Label';

interface CronResult {
  isValid: boolean;
  message: string;
}

interface Props {
  value: string;
}

const parseCron = (val: string): CronResult => {
  try {
    return {
      isValid: true,
      message: toString(val),
    };
  } catch (error) {
    return {
      isValid: false,
      message: String(error),
    };
  }
};

export function Cron({ value }: Props) {
  const input = useRef<HTMLInputElement>();

  const { isValid, message } = useMemo(() => {
    return parseCron(value);
  }, [value]);

  const className = isValid ? '' : s.error;

  useEffect(() => {
    if (input.current !== null) {
      input.current.setCustomValidity(isValid ? '' : message);
    }
  }, [value]);

  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        <Label top="A valid cron expression">
          <input
            ref={input}
            type="text"
            className={s.cronInput}
            value={value}
            data-name="cronExpression"
            required
          />
        </Label>
      </div>
      <div className={className}>
        {message}
      </div>
    </fieldset>
  );
}
