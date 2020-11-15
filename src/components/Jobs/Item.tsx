import { h } from 'preact';

import s from './styles.css';
import { Period } from './Period';
import { DayOfWeek } from './DayOfWeek';
import { DateInMonth } from './DateInMonth';
import { ItemMenu } from './ItemMenu';
import { FunctionInfo } from './FunctionInfo';
import { PERIOD } from '../../constants';
import { IItem } from '../../util/items';
import { preventDefault } from '../../util/component';

interface Props {
  data: IItem;
  remove: EventHandlerNonNull;
  clone: EventHandlerNonNull;
  update: EventHandlerNonNull;
  isMax: boolean;
}

export function Item({
  data,
  remove,
  clone,
  update,
  isMax,
}: Props) {
  const { id, period } = data;

  const dayOfWeek = period === PERIOD.WEEKLY && (
    <DayOfWeek day={data.dayOfWeek} />
  );

  const dateInMonth = period === PERIOD.MONTHLY && (
    <DateInMonth date={String(data.dateInMonth)} />
  );

  return (
    <li>
      <form
        id={id}
        action="#"
        className={s.item}
        onInput={update}
        onSubmit={preventDefault}
      >
        <FunctionInfo
          functionLocation={data.functionLocation}
          functionName={data.functionName}
          description={data.description}
        />
        <Period
          name={id}
          period={period}
          time={data.time}
          cronExpression={data.cronExpression}
        />
        {dayOfWeek}
        {dateInMonth}
        <ItemMenu
          remove={remove}
          clone={clone}
          isMax={isMax}
        />
      </form>
    </li>
  );
}
