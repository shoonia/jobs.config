import { h } from 'preact';

import st from './styles.css';
import {
  DAILY,
  WEEKLY,
  MONTHLY,
} from '../../constants';

function Period({ id, time, period }) {
  const name = `period-${id}`;

  return (
    <fieldset className={st.fields}>
      <div className={st.location}>
        <label className={st.block}>
          <span className={st.text}>
            The time of day the job runs.
          </span>
          <input
            type="time"
            value={time}
            data-id={id}
            data-name="time"
            placeholder="00:00"
            className={st.date}
            required
          />
        </label>
        <span>
          <label className={st.label}>
            <input
              type="radio"
              name={name}
              checked={period === DAILY}
              data-id={id}
              data-name="period"
              value={DAILY}
              className={st.checkbox}
            />
            <span className={st.title}>
              Daily
            </span>
          </label>
          <label className={st.label}>
            <input
              type="radio"
              name={name}
              checked={period === WEEKLY}
              data-id={id}
              data-name="period"
              value={WEEKLY}
              className={st.checkbox}
            />
            <span className={st.title}>
              Weekly
            </span>
          </label>
          <label className={st.label}>
            <input
              type="radio"
              name={name}
              checked={period === MONTHLY}
              data-id={id}
              data-name="period"
              value={MONTHLY}
              className={st.checkbox}
            />
            <span className={st.title}>
              Monthly
            </span>
          </label>
        </span>
      </div>
    </fieldset>
  );
}

export default Period;
