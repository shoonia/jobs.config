import s from './CronExamples.css';
import { Label } from './Label';
import { IconThreeDots } from '../Icons/IconThreeDots';
import { BlankButton } from '../Button';
import { useFormScope } from '../../hooks/formScope';
import { KEYS } from '../../constants';

export const CronExamples: FC = () => {
  const { id } = useFormScope();

  return (
    <Label top="Cron Examples">
      <BlankButton
        className={s.btn}
        aria-haspopup="true"
        aria-label="Show examples"
        data-fl
        data-fl-at="right"
        data-name={KEYS.cronExpression}
        data-id={id}
      >
        <IconThreeDots />
      </BlankButton>
    </Label>
  );
};
