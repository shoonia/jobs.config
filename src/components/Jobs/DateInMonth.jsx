import { h } from 'preact';

import s from './styles.css';
import Label from './Label';

export function DateInMonth({ id, date }) {
  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        <Label top="The day of the month the job runs.">
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
        </Label>
      </div>
    </fieldset>
  );
}

export default DateInMonth;
