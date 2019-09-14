import { h } from 'preact';

import st from './styles.css';
import {
  DAILY,
  WEEKLY,
  MONTHLY
} from '../../constants';

function Period({ id, period, update }) {
  const name = `period-${id}`;

  return (
    <fieldset
      className={st.fields}
      onChange={update}
    >
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
    </fieldset>
  );
}

export default Period;
