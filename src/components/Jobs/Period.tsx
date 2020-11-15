import { h } from 'preact';

import s from './styles.css';
import { Label } from './Label';
import { PERIOD } from '../../constants';
import { PeriodButton } from './PeriodButton';

interface Props {
  name: string;
  time: string;
  period: PERIOD;
}

export function Period({ name, time, period }: Props) {
  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        <Label top="The time of day the job runs.">
          <input
            type="time"
            value={time}
            data-name="time"
            className={s.date}
            disabled={(period === PERIOD.CRON)}
            required
          />
        </Label>
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
    </fieldset>
  );
}
