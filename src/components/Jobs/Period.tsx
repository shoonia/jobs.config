import { h } from 'preact';
import { lazy, Suspense, useState } from 'preact/compat';

import s from './styles.css';
import { PERIOD } from '../../constants';
import { PeriodButton } from './PeriodButton';
import { Time } from './Time';
import { Cron } from './Cron';

const CronMessage = lazy(() => {
  return import('./CronMessage').then((i) => {
    return {
      default: i.CronMessage,
    };
  });
});

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
  const [error, setValidity] = useState<string>('');

  const isCron = (period === PERIOD.CRON);

  const inputElement = isCron
    ? <Cron value={cronExpression} error={error} />
    : <Time value={time} />;

  const cronMessage = isCron && (
    <Suspense fallback={null}>
      <CronMessage
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
        {cronMessage}
      </div>
    </fieldset>
  );
}
