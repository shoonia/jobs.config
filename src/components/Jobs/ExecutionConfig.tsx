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
import { useFormScope } from '../../hooks/formScope';

export const ExecutionConfig: FunctionComponent = () => {
  const [isError, setValidity] = useState<boolean>(false);
  const { period, cronExpression } = useFormScope();

  const isCron = (period === PERIOD.CRON);

  const cronOrTime = isCron
    ? <Cron value={cronExpression} error={isError} />
    : <Time />;

  const cronExamples = isCron && (
    <CronExamples />
  );

  const cronMessage = isCron && (
    <div className={classNames([s.message, isError && s.error ])}>
      {CronTrue({ value: cronExpression, setValidity })}
    </div>
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
