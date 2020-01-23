import { h } from 'preact';

import s from './styles.css';

function Cron({ id, value }) {
  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        <label className={s.block}>
          <span className={s.text}>
            A valid cron expression
          </span>
          <input
            type="text"
            className={s.cronInput}
            value={value}
            data-name="cronExpression"
            data-id={id}
            required
          />
        </label>
      </div>
    </fieldset>
  );
}

export default Cron;
