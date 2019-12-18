import { h } from 'preact';

import s from './styles.css';
import { WEEKLY } from '../../constants';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function DayOfWeek({ id, day, period }) {
  const isHidden = period !== WEEKLY;

  const week = days.map((day) => (
    <option
      key={day}
      value={day}
    >
      {day}
    </option>
  ));

  return (
    <fieldset
      className={s.fields}
      hidden={isHidden}
      disabled={isHidden}
    >
      <div className={s.location}>
        <label className={s.block}>
          <span className={s.text}>
            The day of the week the job runs.
          </span>
          <select
            className={s.date}
            data-name="dayOfWeek"
            data-id={id}
            value={day}
          >
            {week}
          </select>
        </label>
      </div>
    </fieldset>
  );
}

export default DayOfWeek;
