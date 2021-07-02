import { FunctionComponent } from 'preact';

import s from './styles.css';
import { Label } from './Label';

interface Props {
  date: string;
}

export const DateInMonth: FunctionComponent<Props> = ({ date }) => (
  <Label top="The day of the month the job runs.">
    <input
      type="number"
      min="1"
      max="31"
      step="1"
      value={date}
      data-name="dateInMonth"
      className={s.mono}
      required
    />
  </Label>
);
