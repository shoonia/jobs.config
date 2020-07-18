import { h } from 'preact';

import s from './styles.css';
import { Label } from './Label';
import { PERIOD } from '../../constants';

interface Props {
  name: string;
  time: string;
  period: PERIOD;
}

const handlerClick = ({ keyCode, target }: KeyboardEvent) => {
  if (keyCode === 32 || keyCode === 13) {
    const node = ((target as HTMLLabelElement).firstChild as HTMLInputElement);

    node.click();
  }
};

export function Period({ name, time, period }: Props) {
  const isCron = period === PERIOD.CRON;
  const isDaily = period === PERIOD.DAILY;
  const isWeekly = period === PERIOD.WEEKLY;
  const isMonthly = period === PERIOD.MONTHLY;

  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        <Label top="The time of day the job runs.">
          <input
            type="time"
            value={time}
            data-name="time"
            className={s.date}
            disabled={isCron}
            required
          />
        </Label>
        <span>
          <label
            className={s.label}
            tabIndex={isDaily ? -1 : 0}
            onKeyPress={handlerClick}
          >
            <input
              type="radio"
              name={name}
              checked={isDaily}
              data-name="period"
              value={PERIOD.DAILY}
              className={s.period}
            />
            <span className={s.title}>
              Daily
            </span>
          </label>
          <label
            className={s.label}
            tabIndex={isWeekly ? -1 : 0}
            onKeyPress={handlerClick}
          >
            <input
              type="radio"
              name={name}
              checked={isWeekly}
              data-name="period"
              value={PERIOD.WEEKLY}
              className={s.period}
            />
            <span className={s.title}>
              Weekly
            </span>
          </label>
          <label
            className={s.label}
            tabIndex={isMonthly ? -1 : 0}
            onKeyPress={handlerClick}
          >
            <input
              type="radio"
              name={name}
              checked={isMonthly}
              data-name="period"
              value={PERIOD.MONTHLY}
              className={s.period}
            />
            <span className={s.title}>
              Monthly
            </span>
          </label>
          <label
            className={s.label}
            tabIndex={isCron ? -1 : 0}
            onKeyPress={handlerClick}
          >
            <input
              type="radio"
              name={name}
              checked={isCron}
              data-name="period"
              value={PERIOD.CRON}
              className={s.period}
            />
            <span className={s.cron}>
              cron
            </span>
          </label>
        </span>
      </div>
    </fieldset>
  );
}
