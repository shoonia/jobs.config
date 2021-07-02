import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import s from './styles.css';
import { CronTrue } from '../CronTrue';
import { Cron } from './Cron';
import { Time } from './Time';
import { DayOfWeek } from './DayOfWeek';
import { DateInMonth } from './DateInMonth';
import { PERIOD } from '../../constants';
import { classNames } from '../../util/component';
import { TWeekList } from '../../util/week';

interface Props {
  period: PERIOD;
  time: string;
  dayOfWeek: TWeekList;
  dateInMonth: number;
  cronExpression: string;
}

export const ExecutionConfig: FunctionComponent<Props> = ({
  period,
  time,
  dayOfWeek,
  dateInMonth,
  cronExpression,
}) => {
  const [isError, setValidity] = useState<boolean>(false);

  const isCron = (period === PERIOD.CRON);

  const CronOrTime = isCron
    ? <Cron value={cronExpression} error={isError} />
    : <Time value={time} />;

  const cronMessage = isCron && (
    <div className={classNames([s.message, isError && s.error ])}>
      {CronTrue({ value: cronExpression, setValidity })}
    </div>
  );

  const Day = period === PERIOD.WEEKLY && (
    <DayOfWeek day={dayOfWeek} />
  );

  const Month = period === PERIOD.MONTHLY && (
    <DateInMonth date={String(dateInMonth)} />
  );

  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        {CronOrTime}
        <span className={s.slash} />
        {Day}
        {Month}
      </div>
      {cronMessage}
    </fieldset>
  );
};
