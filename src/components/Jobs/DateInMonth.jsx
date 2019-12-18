import { h } from 'preact';

import s from './styles.css';
import { MONTHLY } from '../../constants';

function DateInMonth({ id, date, period }) {
  const isHidden = period !== MONTHLY;

  return (
    <fieldset
      className={s.fields}
      hidden={isHidden}
      disabled={isHidden}
    >
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
