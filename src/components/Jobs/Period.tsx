import type { FunctionComponent } from 'preact';

import s from './styles.css';
import { PERIOD } from '../../constants';
import { PeriodButton } from './PeriodButton';
import { useFormScope } from '../../hooks/formScope';

export const Period: FunctionComponent = () => {
  const { id, period } = useFormScope();

  return (
    <fieldset className={s.fields}>
      <div className={s.period_box}>
        <PeriodButton
          name={id}
          value={PERIOD.DAILY}
          period={period}
        />
        <PeriodButton
          name={id}
          value={PERIOD.WEEKLY}
          period={period}
        />
        <PeriodButton
          name={id}
          value={PERIOD.MONTHLY}
          period={period}
        />
        <PeriodButton
          name={id}
          value={PERIOD.CRON}
          period={period}
        />
      </div>
    </fieldset>
  );
};
