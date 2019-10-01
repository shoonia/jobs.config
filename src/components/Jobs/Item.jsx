import { h } from 'preact';

import st from './styles.css';
import Period from './Period';
import DayOfWeek from './DayOfWeek';
import DateInMonth from './DateInMonth';
import ItemMenu from './ItemMenu';
import FunctionLocation from './FunctionLocation';

function Item({ data, remove, clone, update }) {
  return (
    <li className={st.item}>
      <fieldset
        className={st.fields}
        onInput={update}
      >
        <FunctionLocation
          data={data}
        />
        <input
          type="time"
          value={data.time}
          data-id={data.id}
          data-name="time"
          placeholder="00:00"
          required
        />
      </fieldset>
      <Period
        id={data.id}
        period={data.period}
        update={update}
      />
      <DayOfWeek
        id={data.id}
        day={data.dayOfWeek}
        period={data.period}
        update={update}
      />
      <DateInMonth
        id={data.id}
        date={data.dateInMonth}
        period={data.period}
        update={update}
      />
      <ItemMenu
        id={data.id}
        remove={remove}
        clone={clone}
      />
    </li>
  );
}

export default Item;
