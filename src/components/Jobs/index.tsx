import { h } from 'preact';

import s from './styles.css';
import { Item } from './Item';
import { IItem } from '../../util/items';

interface Props {
  items: IItem[];
  remove: EventHandlerNonNull;
  clone: EventHandlerNonNull;
  update: EventHandlerNonNull;
  isMax: boolean;
}

export function Jobs({
  items,
  remove,
  clone,
  update,
  isMax,
}: Props) {
  const list = items.map((item) => (
    <Item
      key={item.id}
      data={item}
      remove={remove}
      clone={clone}
      update={update}
      isMax={isMax}
    />
  ));

  return (
    <ul className={s.list}>
      {list}
    </ul>
  );
}
