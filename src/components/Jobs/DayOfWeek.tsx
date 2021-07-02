import { FunctionComponent } from 'preact';

import s from './styles.css';
import { Label } from './Label';
import { weekList, TWeekList } from '../../util/week';

interface Props {
  day: TWeekList;
}

const week = weekList.map((day) => (
  <option
    key={day}
    value={day}
  >
    {day}
  </option>
));

export const DayOfWeek: FunctionComponent<Props> = ({ day }) => (
  <Label top="The day of the week the job runs.">
    <select
      className={s.func_input}
      data-name="dayOfWeek"
      value={day}
    >
      {week}
    </select>
  </Label>
);
