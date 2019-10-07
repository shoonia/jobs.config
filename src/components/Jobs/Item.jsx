import { h } from 'preact';

import st from './styles.css';
import Period from './Period';
import DayOfWeek from './DayOfWeek';
import DateInMonth from './DateInMonth';
import ItemMenu from './ItemMenu';
import FunctionLocation from './FunctionLocation';

function Item({ data, remove, clone, update }) {
  return (
    <li>
      <form
        action="#"
        className={st.item}
      >
        <FunctionLocation
          data={data}
          update={update}
        />
        <Period
          id={data.id}
          period={data.period}
          time={data.time}
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
      </form>
    </li>
  );
}

export default Item;
