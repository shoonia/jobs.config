import { h } from 'preact';

import s from './styles.css';
import { Label } from './Label';

interface Props {
  id: string;
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

export function DayOfWeek({ id, day }: Props) {
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
