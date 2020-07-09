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
  const { id, period } = data;

  const dayOfWeek = period === WEEKLY && (
    <DayOfWeek day={data.dayOfWeek} />
  );

  const dateInMonth = period === MONTHLY && (
    <DateInMonth date={String(data.dateInMonth)} />
  );

  const cron = period === CRON && (
    <Suspense fallback={<Loader />}>
      <Cron value={data.cronExpression} />
    </Suspense>
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
        />
        {dayOfWeek}
        {dateInMonth}
        {cron}
        <ItemMenu
          remove={remove}
          clone={clone}
          isMax={isMax}
        />
      </form>
    </li>
  );
}
