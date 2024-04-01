import s from './styles.css';
import { CronTrue } from './CronTrue';
import { Cron } from './Cron';
import { Time } from './Time';
import { CronExamples } from './CronExamples';
import { DayOfWeek } from './DayOfWeek';
import { DateInMonth } from './DateInMonth';
import { PERIOD } from '../../constants';
import { useFormScope } from '../../hooks/formScope';

export const ExecutionConfig: FC = () => {
  const { period } = useFormScope();

  const isCron = (period === PERIOD.CRON);

  const cronOrTime = isCron
    ? <Cron />
    : <Time />;

  const cronExamples = isCron && (
    <CronExamples />
  );

  const cronMessage = isCron && (
    <CronTrue />
  );

  const dayInput = period === PERIOD.WEEKLY && (
    <DayOfWeek />
  );

  const monthInput = period === PERIOD.MONTHLY && (
    <DateInMonth />
  );

  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        {cronOrTime}
        <span className={s.slash} />
        {cronExamples}
        {dayInput}
        {monthInput}
      </div>
      {cronMessage}
    </fieldset>
  );
};
