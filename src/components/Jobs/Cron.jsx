import { h } from 'preact';
import { useEffect, useRef, useMemo } from 'preact/hooks';
import { toString } from 'cronstrue';

import s from './styles.css';

const parseCron = (val) => {
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

function Cron({ id, value }) {
  const input = useRef(null);

  const { isValid, message } = useMemo(() => {
    return parseCron(value);
  }, [value]);

  const className = isValid ? '' : s.error;

  useEffect(() => {
    input.current.setCustomValidity(isValid ? '' : message);
  }, [value]);

  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        <label className={s.block}>
          <span className={s.text}>
            A valid cron expression
          </span>
          <input
            ref={input}
            type="text"
            className={s.cronInput}
            value={value}
            data-name="cronExpression"
            data-id={id}
            required
          />
        </label>
      </div>
      <div className={className}>
        {message}
      </div>
    </fieldset>
  );
}

export default Cron;
