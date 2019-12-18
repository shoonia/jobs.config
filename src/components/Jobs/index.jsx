import { h } from 'preact';

import Item from './Item';
import s from './styles.css';

function Jobs({
  items,
  remove,
  clone,
  update,
  isMax,
}) {
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

export default Jobs;
