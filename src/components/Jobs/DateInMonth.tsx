import s from './styles.css';
import { Label } from './Label';
import { useFormScope } from '../../hooks/formScope';
import { KEYS } from '../../constants';

export const DateInMonth: FC = () => {
  const { dateInMonth } = useFormScope();

  return (
    <Label top="The day of the month the job runs">
      <input
        type="number"
        min={1}
        max={31}
        step={1}
        value={String(dateInMonth)}
        data-name={KEYS.dateInMonth}
        className={s.mono}
        required
      />
    </Label>
  );
};
