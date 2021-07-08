import { FunctionComponent } from 'preact';

import s from './styles.css';
import { Label } from './Label';
import { useFormScope } from '../../hooks/formScope';

export const DateInMonth: FunctionComponent = () => {
  const { dateInMonth } = useFormScope();

  return (
    <Label top="The day of the month the job runs.">
      <input
        type="number"
        min="1"
        max="31"
        step="1"
        value={String(dateInMonth)}
        data-name="dateInMonth"
        className={s.mono}
        required
      />
    </Label>
  );
};
