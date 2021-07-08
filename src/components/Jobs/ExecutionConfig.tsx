import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import s from './styles.css';
import { CronTrue } from '../CronTrue';
import { Cron } from './Cron';
import { Time } from './Time';
import { CronExamples } from './CronExamples';
import { DayOfWeek } from './DayOfWeek';
import { DateInMonth } from './DateInMonth';
import { PERIOD } from '../../constants';
import { classNames } from '../../util/component';
import { TWeekList } from '../../util/week';

interface Props {
  id: string;
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

  const cronOrTime = isCron
    ? <Cron value={cronExpression} error={isError} />
    : <Time value={time} />;

  const cronExamples = isCron && (
    <CronExamples />
  );

  const cronMessage = isCron && (
    <div className={classNames([s.message, isError && s.error ])}>
      {CronTrue({ value: cronExpression, setValidity })}
    </div>
  );

  const dayInput = period === PERIOD.WEEKLY && (
    <DayOfWeek day={dayOfWeek} />
  );

  const monthInput = period === PERIOD.MONTHLY && (
    <DateInMonth date={String(dateInMonth)} />
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
