import { h } from 'preact';

import s from './styles.css';
import { Label } from './Label';
import {
  DAILY,
  WEEKLY,
  MONTHLY,
  CRON,
} from '../../constants';

const handlerClick = ({ keyCode, target }) => {
  if (keyCode === 32 || keyCode === 13) {
    target.firstChild.click();
  }
};

function Period({ id, time, period }) {
  const name = 'period-' + id;
  const isCron = period === CRON;

  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        <Label top="The time of day the job runs.">
          <input
            type="time"
            value={time}
            data-id={id}
            data-name="time"
            className={s.date}
            disabled={isCron}
            required
          />
        </Label>
        <span>
          <label
            className={s.label}
            tabIndex={period === DAILY ? -1 : 0}
            onKeyPress={handlerClick}
          >
            <input
              type="radio"
              name={name}
              checked={period === DAILY}
              data-id={id}
              data-name="period"
              value={DAILY}
              className={s.period}
            />
            <span className={s.title}>
              Daily
            </span>
          </label>
          <label
            className={s.label}
            tabIndex={period === WEEKLY ? -1 : 0}
            onKeyPress={handlerClick}
          >
            <input
              type="radio"
              name={name}
              checked={period === WEEKLY}
              data-id={id}
              data-name="period"
              value={WEEKLY}
              className={s.period}
            />
            <span className={s.title}>
              Weekly
            </span>
          </label>
          <label
            className={s.label}
            tabIndex={period === MONTHLY ? -1 : 0}
            onKeyPress={handlerClick}
          >
            <input
              type="radio"
              name={name}
              checked={period === MONTHLY}
              data-id={id}
              data-name="period"
              value={MONTHLY}
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
              data-id={id}
              data-name="period"
              value={CRON}
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

export default Period;
