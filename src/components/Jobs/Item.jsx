import { h } from 'preact';

import s from './styles.css';
import Period from './Period';
import DayOfWeek from './DayOfWeek';
import DateInMonth from './DateInMonth';
import ItemMenu from './ItemMenu';
import FunctionInfo from './FunctionInfo';
import { WEEKLY, MONTHLY } from '../../constants';

function Item({
  data,
  remove,
  clone,
  update,
  isMax,
}) {
  const dayOfWeek = data.period === WEEKLY
    ? <DayOfWeek
      id={data.id}
      day={data.dayOfWeek}
    />
    : null;

  const dateInMonth = data.period === MONTHLY
    ? <DateInMonth
      id={data.id}
      date={data.dateInMonth}
    />
    : null;

  return (
    <li>
      <form
        action="#"
        className={s.item}
        onInput={update}
      >
        <FunctionInfo
          id={data.id}
          functionLocation={data.functionLocation}
          functionName={data.functionName}
          description={data.description}
        />
        <Period
          id={data.id}
          period={data.period}
          time={data.time}
        />
        {dayOfWeek}
        {dateInMonth}
        <ItemMenu
          id={data.id}
          remove={remove}
          clone={clone}
          isMax={isMax}
        />
      </form>
    </li>
  );
}

export default Item;
