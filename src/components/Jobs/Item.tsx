import { h } from 'preact';
import { Suspense, lazy } from 'preact/compat';

import s from './styles.css';
import { Period } from './Period';
import { DayOfWeek } from './DayOfWeek';
import { DateInMonth } from './DateInMonth';
import { ItemMenu } from './ItemMenu';
import { FunctionInfo } from './FunctionInfo';
import { Loader } from '../Loader';
import { WEEKLY, MONTHLY, CRON } from '../../constants';
import { IItem } from '../../util/items';
import { preventDefault } from '../../util/component';

interface Props {
  data: IItem;
  remove: EventHandlerNonNull;
  clone: EventHandlerNonNull;
  update: EventHandlerNonNull;
  isMax: boolean;
}

const Cron = lazy(() => {
  return import('./Cron').then((i) => {
    return {
      default: i.Cron,
    };
  });
});

export function Item({
  data,
  remove,
  clone,
  update,
  isMax,
}: Props) {
  const dayOfWeek = data.period === WEEKLY
    ? <DayOfWeek
      id={data.id}
      day={data.dayOfWeek}
    />
    : null;

  const dateInMonth = data.period === MONTHLY
    ? <DateInMonth
      id={data.id}
      date={String(data.dateInMonth)}
    />
    : null;

  const cron = data.period === CRON
    ? (
      <Suspense fallback={<Loader />}>
        <Cron
          id={data.id}
          value={data.cronExpression}
        />
      </Suspense>
    )
    : null;

  return (
    <li>
      <form
        action="#"
        className={s.item}
        onInput={update}
        onSubmit={preventDefault}
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
        {cron}
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
