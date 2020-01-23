import { h } from 'preact';

import s from './styles.css';

function DateInMonth({ id, date }) {
  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        <label className={s.block}>
          <span className={s.text}>
            The day of the month the job runs.
          </span>
          <input
            type="number"
            min="1"
            max="31"
            step="1"
            value={date}
            data-id={id}
            data-name="dateInMonth"
            className={s.date}
            required
          />
        </label>
      </div>
    </fieldset>
  );
}

export default DateInMonth;
