import { h } from 'preact';

import s from './styles.css';
import { Label } from './Label';

interface Props {
  value: string;
}

export function Time({ value }: Props) {
  return (
    <Label top="The time of day the job runs.">
      <input
        type="time"
        value={value}
        data-name="time"
        className={s.date}
        required
      />
    </Label>
  );
}
