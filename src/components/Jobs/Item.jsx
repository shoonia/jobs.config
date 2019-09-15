import { h } from 'preact';

import st from './styles.css';
import Period from './Period';
import DayOfWeek from './DayOfWeek';
import DateInMonth from './DateInMonth';
import ItemMenu from './ItemMenu';

function Item({ data, remove, clone, update }) {
  return (
    <li className={st.item}>
      <fieldset
        className={st.fields}
        onInput={update}
      >
        <input
          type="text"
          value={data.filename}
          data-id={data.id}
          data-name="filename"
          placeholder="file name"
          required
        />
        <input
          type="text"
          value={data.funcname}
          data-id={data.id}
          data-name="funcname"
          placeholder="function name"
          required
        />
        <input
          type="text"
          value={data.description}
          data-id={data.id}
          data-name="description"
          placeholder="description"
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
