import type { FunctionComponent } from 'preact';

import s from './styles.css';
import { Label } from './Label';
import { useFormScope } from '../../hooks/formScope';

export const Time: FunctionComponent = () => {
  const { time } = useFormScope();

  return (
    <Label top="The time of day the job runs">
      <input
        type="time"
        value={time}
        data-name="time"
        className={s.mono}
        required
      />
    </Label>
  );
};
