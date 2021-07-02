import { FunctionComponent } from 'preact';

import s from './styles.css';
import { PERIOD } from '../../constants';
import { PeriodButton } from './PeriodButton';

interface Props {
  name: string;
  period: PERIOD;
}

export const Period: FunctionComponent<Props> = ({
  name,
  period,
}) => {
  return (
    <fieldset className={s.fields}>
      <div className={s.period_box}>
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
};
