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
        onInput={update}
      >
        <FunctionLocation
          id={data.id}
          filename={data.filename}
          funcname={data.funcname}
          description={data.description}
        />
        <Period
          id={data.id}
          period={data.period}
          time={data.time}
        />
        <DayOfWeek
          id={data.id}
          day={data.dayOfWeek}
          period={data.period}
        />
        <DateInMonth
          id={data.id}
          date={data.dateInMonth}
          period={data.period}
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
