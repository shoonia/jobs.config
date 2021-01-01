import { FunctionComponent, h } from 'preact';
import { useState } from 'preact/compat';

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

export const Period: FunctionComponent<Props> = ({
  name,
  time,
  cronExpression,
  period,
}) => {
  const [isError, setValidity] = useState<boolean>(false);

  const isCron = (period === PERIOD.CRON);

  const inputElement = isCron
    ? <Cron value={cronExpression} error={isError} />
    : <Time value={time} />;

  const cronMessage = isCron && (
    <span className={(isError && s.error)}>
      {CronTrue({ value: cronExpression, setValidity })}
    </span>
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
};
