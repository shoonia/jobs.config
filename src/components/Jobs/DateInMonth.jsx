import { h } from 'preact';

import st from './styles.css';
import { MONTHLY } from '../../constants';

function DateInMonth({ id, date, period, update }) {
  return (
    <fieldset
      className={st.fields}
      hidden={period !== MONTHLY}
    >
      <input
        type="number"
        min="1"
        max="31"
        step="1"
        value={date}
        data-id={id}
        data-name="dateInMonth"
        onInput={update}
        required
      />
    </fieldset>
  );
}

export default DateInMonth;
