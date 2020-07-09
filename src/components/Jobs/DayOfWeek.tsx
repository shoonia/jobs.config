import { h } from 'preact';

import s from './styles.css';
import { Label } from './Label';

interface Props {
  day: string;
}

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export function DayOfWeek({ day }: Props) {
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
            value={day}
          >
            {week}
          </select>
        </Label>
      </div>
    </fieldset>
  );
}
