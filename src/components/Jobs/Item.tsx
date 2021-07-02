import { FunctionComponent } from 'preact';

import s from './styles.css';
import { Period } from './Period';
import { ItemMenu } from './ItemMenu';
import { FunctionInfo } from './FunctionInfo';
import { ExecutionConfig } from './ExecutionConfig';
import { IItem } from '../../util/items';
import { preventDefault } from '../../util/component';

interface Props {
  data: IItem;
  remove: EventListener;
  clone: EventListener;
  update: EventListener;
  isMax: boolean;
}

export const Item: FunctionComponent<Props> = ({
  data,
  remove,
  clone,
  update,
  isMax,
}) => {
  const {
    id,
    functionLocation,
    functionName,
    description,
    period,
    time,
    dayOfWeek,
    dateInMonth,
    cronExpression,
  } = data;

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
          functionLocation={functionLocation}
          functionName={functionName}
          description={description}
        />
        <Period
          name={id}
          period={period}
        />
        <ExecutionConfig
          period={period}
          time={time}
          dayOfWeek={dayOfWeek}
          dateInMonth={dateInMonth}
          cronExpression={cronExpression}
        />
        <ItemMenu
          remove={remove}
          clone={clone}
          isMax={isMax}
        />
      </form>
    </li>
  );
};
