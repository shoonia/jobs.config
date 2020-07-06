import { h } from 'preact';

import s from './styles.css';
import { Label } from './Label';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function DayOfWeek({ id, day }) {
  const week = days.map((day) => (
    <option
      key={day}
      value={day}
    >
      {day}
    </option>
  ));

  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        <Label top="The day of the week the job runs.">
          <select
            className={s.date}
            data-name="dayOfWeek"
            data-id={id}
            value={day}
          >
            {week}
          </select>
        </Label>
      </div>
    </fieldset>
  );
}

export default DayOfWeek;
