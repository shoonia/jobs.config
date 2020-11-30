import { h } from 'preact';
import { Suspense, useState } from 'preact/compat';

import s from './styles.css';
import { PERIOD } from '../../constants';
import { PeriodButton } from './PeriodButton';
import { Time } from './Time';
import { Cron } from './Cron';
import { CronTrue } from '../CronTrue';

interface Props {
  name: string;
  time: string;
  period: PERIOD;
  cronExpression: string;
}

export function Period({
  name,
  time,
  cronExpression,
  period,
}: Props) {
  const [isError, setValidity] = useState<boolean>(false);

  const isCron = (period === PERIOD.CRON);

  const inputElement = isCron
    ? <Cron value={cronExpression} error={isError} />
    : <Time value={time} />;

  const cronMessage = isCron && (
    <Suspense fallback={null}>
      <CronTrue
        value={cronExpression}
        setValidity={setValidity}
      />
    </Suspense>
  );

  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        <div>
          {inputElement}
          <PeriodButton
            name={name}
            value={PERIOD.DAILY}
            period={period}
          />
          <PeriodButton
            name={name}
            value={PERIOD.WEEKLY}
            period={period}
          />
          <PeriodButton
            name={name}
            value={PERIOD.MONTHLY}
            period={period}
          />
          <PeriodButton
            name={name}
            value={PERIOD.CRON}
            period={period}
          />
        </div>
        <span className={(isError && s.error)}>
          {cronMessage}
        </span>
      </div>
    </fieldset>
  );
}
