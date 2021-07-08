import { FunctionComponent } from 'preact';

import s from './styles.css';
import { Label } from './Label';
import { weekList } from '../../util/week';
import { useFormScope } from '../../hooks/formScope';

const week = weekList.map((day) => (
  <option
    key={day}
    value={day}
  >
    {day}
  </option>
));

export const DayOfWeek: FunctionComponent = () => {
  const { dayOfWeek } = useFormScope();

  return (
    <Label top="The day of the week the job runs.">
      <select
        className={s.func_input}
        data-name="dayOfWeek"
        value={dayOfWeek}
      >
        {week}
      </select>
    </Label>
  );
};
