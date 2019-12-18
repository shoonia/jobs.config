import { h } from 'preact';

import s from './styles.css';
import {
  DAILY,
  WEEKLY,
  MONTHLY,
} from '../../constants';

function onClick({ keyCode }) {
  if (keyCode === 32 || keyCode === 13) {
    event.target.querySelector('input[type="radio"]').click();
  }
}

function Period({ id, time, period }) {
  const name = `period-${id}`;

  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        <label className={s.block}>
          <span className={s.text}>
            The time of day the job runs.
          </span>
          <input
            type="time"
            value={time}
            data-id={id}
            data-name="time"
            placeholder="00:00"
            className={s.date}
            required
          />
        </label>
        <span>
          <label
            className={s.label}
            tabIndex={period === DAILY ? -1 : 0}
            onKeyPress={onClick}
          >
            <input
              type="radio"
              name={name}
              checked={period === DAILY}
              data-id={id}
              data-name="period"
              value={DAILY}
              className={s.checkbox}
            />
            <span className={s.title}>
              Daily
            </span>
          </label>
          <label
            className={s.label}
            tabIndex={period === WEEKLY ? -1 : 0}
            onKeyPress={onClick}
          >
            <input
              type="radio"
              name={name}
              checked={period === WEEKLY}
              data-id={id}
              data-name="period"
              value={WEEKLY}
              className={s.checkbox}
            />
            <span className={s.title}>
              Weekly
            </span>
          </label>
          <label
            className={s.label}
            tabIndex={period === MONTHLY ? -1 : 0}
            onKeyPress={onClick}
          >
            <input
              type="radio"
              name={name}
              checked={period === MONTHLY}
              data-id={id}
              data-name="period"
              value={MONTHLY}
              className={s.checkbox}
            />
            <span className={s.title}>
              Monthly
            </span>
          </label>
        </span>
      </div>
    </fieldset>
  );
}

export default Period;
